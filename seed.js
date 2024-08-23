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
  { mentorId: 1, expertiseId: 1 }, // Alice - Finance
  { mentorId: 1, expertiseId: 4 }, // Alice - Strategic Management
  { mentorId: 2, expertiseId: 2 }, // Bob - Marketing
  { mentorId: 2, expertiseId: 5 }, // Bob - Human Resources
  { mentorId: 3, expertiseId: 3 }, // Charlie - Operations Management
  { mentorId: 3, expertiseId: 6 }, // Charlie - International Business
  { mentorId: 4, expertiseId: 7 }, // David - Entrepreneurship
  { mentorId: 4, expertiseId: 8 }, // David - Information Technology
  { mentorId: 5, expertiseId: 9 }, // Eve - Supply Chain Management
  { mentorId: 5, expertiseId: 10 }, // Eve - Business Analytics
  { mentorId: 6, expertiseId: 11 }, // Frank - Leadership
  { mentorId: 6, expertiseId: 12 }, // Frank - Corporate Governance
  { mentorId: 7, expertiseId: 13 }, // Grace - Project Management
  { mentorId: 7, expertiseId: 14 }, // Grace - Digital Marketing
  { mentorId: 8, expertiseId: 15 }, // Heidi - E-commerce
  { mentorId: 8, expertiseId: 16 }, // Heidi - Data Science
  { mentorId: 9, expertiseId: 17 }, // Ivan - Cybersecurity
  { mentorId: 9, expertiseId: 18 }, // Ivan - Sustainability
  { mentorId: 10, expertiseId: 19 }, // Judy - Healthcare Management
  { mentorId: 10, expertiseId: 1 }, // Judy - Finance
  { mentorId: 11, expertiseId: 2 }, // Kevin - Marketing
  { mentorId: 11, expertiseId: 3 }, // Kevin - Operations Management
  { mentorId: 12, expertiseId: 4 }, // Laura - Strategic Management
  { mentorId: 12, expertiseId: 5 }, // Laura - Human Resources
  { mentorId: 13, expertiseId: 6 }, // Mike - International Business
  { mentorId: 13, expertiseId: 7 }, // Mike - Entrepreneurship
  { mentorId: 14, expertiseId: 8 }, // Nina - Information Technology
  { mentorId: 14, expertiseId: 9 }, // Nina - Supply Chain Management
  { mentorId: 15, expertiseId: 10 }, // Oliver - Business Analytics
  { mentorId: 15, expertiseId: 11 }, // Oliver - Leadership
  { mentorId: 16, expertiseId: 12 }, // Patty - Corporate Governance
  { mentorId: 16, expertiseId: 13 }, // Patty - Project Management
  { mentorId: 17, expertiseId: 14 }, // Quinn - Digital Marketing
  { mentorId: 17, expertiseId: 15 }, // Quinn - E-commerce
  { mentorId: 18, expertiseId: 16 }, // Riley - Data Science
  { mentorId: 18, expertiseId: 17 }, // Riley - Cybersecurity
  { mentorId: 19, expertiseId: 18 }, // Sam - Sustainability
  { mentorId: 19, expertiseId: 19 }, // Sam - Healthcare Management
  { mentorId: 20, expertiseId: 1 }, // Tina - Finance
  { mentorId: 20, expertiseId: 2 }, // Tina - Marketing
  { mentorId: 21, expertiseId: 3 }, // Ursula - Operations Management
  { mentorId: 21, expertiseId: 4 }, // Ursula - Strategic Management
  { mentorId: 22, expertiseId: 5 }, // Victor - Human Resources
  { mentorId: 22, expertiseId: 6 }, // Victor - International Business
  { mentorId: 23, expertiseId: 7 }, // Wendy - Entrepreneurship
  { mentorId: 23, expertiseId: 8 }, // Wendy - Information Technology
  { mentorId: 24, expertiseId: 9 }, // Xavier - Supply Chain Management
  { mentorId: 24, expertiseId: 10 }, // Xavier - Business Analytics
  { mentorId: 25, expertiseId: 11 }, // Yvonne - Leadership
  { mentorId: 25, expertiseId: 12 }, // Yvonne - Corporate Governance
  { mentorId: 26, expertiseId: 13 }, // Zoe - Project Management
  { mentorId: 26, expertiseId: 14 }, // Zoe - Digital Marketing
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
