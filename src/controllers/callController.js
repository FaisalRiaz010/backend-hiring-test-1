const Call = require("../models/calls");
const twilio = require("twilio");

exports.handleIncomingCall = (req, res) => {
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();

  const gather = twiml.gather({
    numDigits: 1,
    action: "/calls/handle-input",
    method: "POST",
  });

  gather.say("Press 1 to talk to an agent. Press 2 to leave a voicemail.");
  res.type("text/xml").send(twiml.toString());
};

exports.handleDigitInput = (req, res) => {
  const { Digits, From } = req.body;
  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();

  if (Digits === "1") {
    const dial = twiml.dial();
    dial.number(process.env.FORWARDING_PHONE);
  } else if (Digits === "2") {
    twiml.say("Please leave a message after the beep. Press # to end.");
    twiml.record({
      action: "/calls/voicemail",
      method: "POST",
      maxLength: 60,
      finishOnKey: "#",
    });
  } else {
    twiml.say("Invalid option. Goodbye.");
    twiml.hangup();
  }

  res.type("text/xml").send(twiml.toString());
};

exports.handleVoicemail = async (req, res) => {
  const { From, To, RecordingUrl } = req.body;

  const call = new Call({
    from: From,
    to: To,
    status: "voicemail",
    voicemailUrl: RecordingUrl,
  });

  await call.save();

  const twiml = new twilio.twiml.VoiceResponse();
  twiml.say("Thanks for your message. Goodbye.");
  res.type("text/xml").send(twiml.toString());
};

exports.logCall = async (req, res) => {
  const { From, To, CallStatus, CallDuration } = req.body;

  const call = new Call({
    from: From,
    to: To,
    status: CallStatus,
    duration: CallDuration,
  });

  await call.save();
  res.sendStatus(200);
};

exports.getCallLogs = async (req, res) => {
  const logs = await Call.find().sort({ createdAt: -1 });
  res.json(logs);
};
