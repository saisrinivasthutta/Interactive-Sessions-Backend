const db = require("../db");

const Mentor = function (mentor) {
  this.name = mentor.name;
  this.availability = mentor.availability;
};

Mentor.create = (newMentor, result) => {
  db.run(
    "INSERT INTO mentors (name, availability) VALUES (?, ?)",
    [newMentor.name, JSON.stringify(newMentor.availability)],
    function (err) {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { id: this.lastID, ...newMentor });
    }
  );
};

Mentor.findById = (mentorId, result) => {
  db.get("SELECT * FROM mentors WHERE id = ?", [mentorId], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res) {
      try {
        res.availability = JSON.parse(res.availability);
      } catch (error) {
        result(error, null);
        return;
      }
      result(null, res);
    } else {
      result({ kind: "not_found" }, null);
    }
  });
};

Mentor.updateAvailability = (mentorId, newAvailability, result) => {
  const availabilityJson = JSON.stringify(newAvailability);
  db.run(
    "UPDATE mentors SET availability = ? WHERE id = ?",
    [availabilityJson, mentorId],
    function (err) {
      if (err) {
        result(err, null);
        return;
      }
      if (this.changes == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { id: mentorId, availability: newAvailability });
    }
  );
};

Mentor.findAvailableMentors = (scheduleTime, result) => {
  db.all("SELECT * FROM mentors", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    const availableMentors = res.filter((mentor) => {
      try {
        const availability = JSON.parse(mentor.availability);
        return availability.some((slot) => {
          return slot.startTime <= scheduleTime && slot.endTime > scheduleTime;
        });
      } catch (error) {
        console.error("Error parsing availability:", error);
        return false;
      }
    });

    result(null, availableMentors);
  });
};

Mentor.findByExpertise = (expertiseId, result) => {
  db.all(
    "SELECT mentors.* FROM mentors JOIN mentor_expertises ON mentors.id = mentor_expertises.mentor_id WHERE mentor_expertises.expertise_id = ?",
    [expertiseId],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        res.forEach((mentor) => {
          try {
            mentor.availability = JSON.parse(mentor.availability);
          } catch (error) {
            console.error("Error parsing availability:", error);
            result(error, null);
            return;
          }
        });
        result(null, res);
      } else {
        result({ kind: "not_found" }, null);
      }
    }
  );
};

module.exports = Mentor;
