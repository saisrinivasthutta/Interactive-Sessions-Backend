const express = require("express");
const router = express.Router();
const schedulerController = require("../controllers/schedulerController");

router.post("/schedule", schedulerController.scheduleSession);
router.get("/available", schedulerController.getAvailableMentors);
router.get("/student/:studentId", schedulerController.getSessionsByStudentId);
router.get("/mentor/:mentorId", schedulerController.getSessionsByMentorId);

module.exports = router;
