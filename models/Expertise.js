const db = require("../db");

const Expertise = function (expertise) {
  this.name = expertise.name;
};

Expertise.create = (newExpertise, result) => {
  db.run(
    "INSERT INTO expertises (name) VALUES (?)",
    [newExpertise.name],
    function (err) {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { id: this.lastID, ...newExpertise });
    }
  );
};

module.exports = Expertise;
