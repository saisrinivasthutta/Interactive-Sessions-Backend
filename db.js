const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("interactive-sessions.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the interactive-sessions database.");
  }
});

module.exports = db;
