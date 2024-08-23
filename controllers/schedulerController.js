const Mentor = require("../models/Mentor");
const Session = require("../models/Session");
const Expertise = require("../models/Expertise");

exports.scheduleSession = async (req, res) => {
  const { studentId, mentorId, expertiseId, duration, scheduleTime } = req.body;

  // Find mentor by expertise or specific mentorId
  let mentor;
  if (mentorId) {
    mentor = await new Promise((resolve, reject) => {
      Mentor.findById(mentorId, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  } else {
    mentor = await new Promise((resolve, reject) => {
      Mentor.findByExpertise(expertiseId, (err, data) => {
        if (err) reject(err);
        else resolve(data[0]); // Assuming only one mentor is returned
      });
    });
  }

  if (!mentor) {
    return res.status(404).json({ message: "Mentor not found" });
  }

  // Check if the requested time slot is available
  const isAvailable = mentor.availability.some((slot) => {
    return slot.startTime <= scheduleTime && slot.endTime > scheduleTime;
  });

  if (!isAvailable) {
    return res.status(400).json({ message: "Time slot not available" });
  }

  // Update mentor's availability
  const updatedAvailability = mentor.availability
    .filter((slot) => {
      if (slot.startTime <= scheduleTime && slot.endTime > scheduleTime) {
        // Remove the booked slot and adjust the remaining slots
        const start = slot.startTime;
        const end = slot.endTime;
        const bookedEnd = new Date(scheduleTime);
        bookedEnd.setMinutes(bookedEnd.getMinutes() + duration);

        if (start < scheduleTime) {
          return { startTime: start, endTime: scheduleTime };
        }
        if (bookedEnd < end) {
          return { startTime: bookedEnd, endTime: end };
        }
        return null; // Slot is fully booked
      }
      return slot; // Slot is not affected
    })
    .filter((slot) => slot !== null); // Remove null slots

  await new Promise((resolve, reject) => {
    Mentor.updateAvailability(mentor.id, updatedAvailability, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

  // Create a new session and store it in the database
  const newSession = new Session({
    studentId: studentId,
    mentorId: mentor.id,
    expertiseId: expertiseId,
    duration: duration,
    scheduleTime: scheduleTime,
  });

  Session.create(newSession, (err, session) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err });
    }
    res.status(200).json({ message: "Session scheduled", session: session });
  });
};

exports.getAvailableMentors = async (req, res) => {
  const { scheduleTime, expertiseId } = req.query;

  if (!scheduleTime || !expertiseId) {
    return res
      .status(400)
      .json({ message: "Missing scheduleTime or expertiseId parameter" });
  }

  const availableMentors = await new Promise((resolve, reject) => {
    Mentor.findByExpertise(expertiseId, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

  // Filter mentors who are available at the given time
  const filteredMentors = availableMentors.filter((mentor) => {
    try {
      const availability = mentor.availability;
      return availability.some((slot) => {
        return slot.startTime <= scheduleTime && slot.endTime > scheduleTime;
      });
    } catch (error) {
      console.error("Error parsing availability:", error);
      return false;
    }
  });

  res
    .status(200)
    .json({ message: "Available mentors", mentors: filteredMentors });
};

exports.getSessionsByStudentId = async (req, res) => {
  const { studentId } = req.params;

  if (!studentId) {
    return res.status(400).json({ message: "Missing studentId parameter" });
  }

  const sessions = await new Promise((resolve, reject) => {
    Session.findByStudentId(studentId, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

  res.status(200).json({ message: "Sessions by student", sessions: sessions });
};

exports.getSessionsByMentorId = async (req, res) => {
  const { mentorId } = req.params;

  if (!mentorId) {
    return res.status(400).json({ message: "Missing mentorId parameter" });
  }

  const sessions = await new Promise((resolve, reject) => {
    Session.findByMentorId(mentorId, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

  res.status(200).json({ message: "Sessions by mentor", sessions: sessions });
};
