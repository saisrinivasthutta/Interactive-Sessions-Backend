const db = require("./db");

// Create tables
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS mentors (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, availability TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY AUTOINCREMENT, studentId INTEGER, mentorId INTEGER, expertiseId INTEGER, duration INTEGER, scheduleTime TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS expertises (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS mentor_expertises (mentor_id INTEGER, expertise_id INTEGER, FOREIGN KEY (mentor_id) REFERENCES mentors(id), FOREIGN KEY (expertise_id) REFERENCES expertises(id))"
  );
});

// Insert dummy data
const mentors = [
  {
    name: "Alice",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "14:00", endTime: "17:00" },
    ]),
  },
  {
    name: "Bob",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "12:00" },
      { startTime: "15:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Charlie",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "11:00" },
      { startTime: "13:00", endTime: "16:00" },
    ]),
  },
  {
    name: "David",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "11:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Eve",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "13:00" },
      { startTime: "15:00", endTime: "17:00" },
    ]),
  },
  {
    name: "Frank",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "10:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Grace",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "15:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Heidi",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "14:00" },
      { startTime: "16:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Ivan",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "11:00" },
      { startTime: "13:00", endTime: "15:00" },
    ]),
  },
  {
    name: "Judy",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "11:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Kevin",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "13:00" },
      { startTime: "15:00", endTime: "17:00" },
    ]),
  },
  {
    name: "Laura",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "10:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Mike",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "15:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Nina",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "14:00" },
      { startTime: "16:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Oliver",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "11:00" },
      { startTime: "13:00", endTime: "15:00" },
    ]),
  },
  {
    name: "Patty",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "11:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Quinn",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "13:00" },
      { startTime: "15:00", endTime: "17:00" },
    ]),
  },
  {
    name: "Riley",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "10:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Sam",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "15:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Tina",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "14:00" },
      { startTime: "16:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Ursula",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "11:00" },
      { startTime: "13:00", endTime: "15:00" },
    ]),
  },
  {
    name: "Victor",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "11:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Wendy",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "13:00" },
      { startTime: "15:00", endTime: "17:00" },
    ]),
  },
  {
    name: "Xavier",
    availability: JSON.stringify([
      { startTime: "08:00", endTime: "10:00" },
      { startTime: "14:00", endTime: "16:00" },
    ]),
  },
  {
    name: "Yvonne",
    availability: JSON.stringify([
      { startTime: "09:00", endTime: "12:00" },
      { startTime: "15:00", endTime: "18:00" },
    ]),
  },
  {
    name: "Zoe",
    availability: JSON.stringify([
      { startTime: "10:00", endTime: "14:00" },
      { startTime: "16:00", endTime: "18:00" },
    ]),
  },
];

const expertises = [
  { name: "Finance" },
  { name: "Marketing" },
  { name: "Operations Management" },
  { name: "Strategic Management" },
  { name: "Human Resources" },
  { name: "International Business" },
  { name: "Entrepreneurship" },
  { name: "Information Technology" },
  { name: "Supply Chain Management" },
  { name: "Business Analytics" },
  { name: "Leadership" },
  { name: "Corporate Governance" },
  { name: "Project Management" },
  { name: "Digital Marketing" },
  { name: "E-commerce" },
  { name: "Data Science" },
  { name: "Cybersecurity" },
  { name: "Sustainability" },
  { name: "Healthcare Management" },
];

const mentorExpertises = [
  { mentorId: 1, expertiseId: 1 },
  { mentorId: 1, expertiseId: 4 },
  { mentorId: 2, expertiseId: 2 },
  { mentorId: 2, expertiseId: 5 },
  { mentorId: 3, expertiseId: 3 },
  { mentorId: 3, expertiseId: 6 },
  { mentorId: 4, expertiseId: 7 },
  { mentorId: 4, expertiseId: 8 },
  { mentorId: 5, expertiseId: 9 },
  { mentorId: 5, expertiseId: 10 },
  { mentorId: 6, expertiseId: 11 },
  { mentorId: 6, expertiseId: 12 },
  { mentorId: 7, expertiseId: 13 },
  { mentorId: 7, expertiseId: 14 },
  { mentorId: 8, expertiseId: 15 },
  { mentorId: 8, expertiseId: 16 },
  { mentorId: 9, expertiseId: 17 },
  { mentorId: 9, expertiseId: 18 },
  { mentorId: 10, expertiseId: 19 },
  { mentorId: 10, expertiseId: 1 },
  { mentorId: 11, expertiseId: 2 },
  { mentorId: 11, expertiseId: 3 },
  { mentorId: 12, expertiseId: 4 },
  { mentorId: 12, expertiseId: 5 },
  { mentorId: 13, expertiseId: 6 },
  { mentorId: 13, expertiseId: 7 },
  { mentorId: 14, expertiseId: 8 },
  { mentorId: 14, expertiseId: 9 },
  { mentorId: 15, expertiseId: 10 },
  { mentorId: 15, expertiseId: 11 },
  { mentorId: 16, expertiseId: 12 },
  { mentorId: 16, expertiseId: 13 },
  { mentorId: 17, expertiseId: 14 },
  { mentorId: 17, expertiseId: 15 },
  { mentorId: 18, expertiseId: 16 },
  { mentorId: 18, expertiseId: 17 },
  { mentorId: 19, expertiseId: 18 },
  { mentorId: 19, expertiseId: 19 },
  { mentorId: 20, expertiseId: 1 },
  { mentorId: 20, expertiseId: 2 },
  { mentorId: 21, expertiseId: 3 },
  { mentorId: 21, expertiseId: 4 },
  { mentorId: 22, expertiseId: 5 },
  { mentorId: 22, expertiseId: 6 },
  { mentorId: 23, expertiseId: 7 },
  { mentorId: 23, expertiseId: 8 },
  { mentorId: 24, expertiseId: 9 },
  { mentorId: 24, expertiseId: 10 },
  { mentorId: 25, expertiseId: 11 },
  { mentorId: 25, expertiseId: 12 },
  { mentorId: 26, expertiseId: 13 },
  { mentorId: 26, expertiseId: 14 },
];

// Insert mentors into the database
mentors.forEach((mentor) => {
  db.run("INSERT INTO mentors (name, availability) VALUES (?, ?)", [
    mentor.name,
    mentor.availability,
  ]);
});

// Insert expertises into the database
expertises.forEach((expertise) => {
  db.run("INSERT INTO expertises (name) VALUES (?)", [expertise.name]);
});

// Insert mentor_expertises into the database
mentorExpertises.forEach((mentorExpertise) => {
  db.run(
    "INSERT INTO mentor_expertises (mentor_id, expertise_id) VALUES (?, ?)",
    [mentorExpertise.mentorId, mentorExpertise.expertiseId]
  );
});

// Close the database connection
db.close();
