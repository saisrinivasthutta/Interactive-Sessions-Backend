const db = require("../db");

const Session = function (session) {
  this.studentId = session.studentId;
  this.mentorId = session.mentorId;
  this.expertiseId = session.expertiseId;
  this.duration = session.duration;
  this.scheduleTime = session.scheduleTime;
};

Session.create = (newSession, result) => {
  db.run(
    "INSERT INTO sessions (studentId, mentorId, expertiseId, duration, scheduleTime) VALUES (?, ?, ?, ?, ?)",
    [
      newSession.studentId,
      newSession.mentorId,
      newSession.expertiseId,
      newSession.duration,
      newSession.scheduleTime,
    ],
    function (err) {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { id: this.lastID, ...newSession });
    }
  );
};

Session.findByStudentId = (studentId, result) => {
  db.all(
    "SELECT * FROM sessions WHERE studentId = ?",
    [studentId],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

Session.findByMentorId = (mentorId, result) => {
  db.all(
    "SELECT * FROM sessions WHERE mentorId = ?",
    [mentorId],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

module.exports = Session;
