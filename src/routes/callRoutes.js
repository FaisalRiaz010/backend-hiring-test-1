const express = require("express");
const router = express.Router();
const callController = require("../controllers/callController");

router.post("/incoming", callController.handleIncomingCall);
router.post("/handle-input", callController.handleDigitInput);
router.post("/voicemail", callController.handleVoicemail);
router.post("/log", callController.logCall);
router.get("/logs", callController.getCallLogs);

module.exports = router;
