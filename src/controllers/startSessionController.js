const { createSessionService } = require('../services/sessionService.js');


exports.startSessionController = async (req, res) => {
    try {
      const { sessionId } = req.body;
      const session = await createSessionService(sessionId);
      res.status(201).json({ sessionId: session.sessionId });
    } catch (error) {
      res.status(500).json({ message: 'Error starting session' });
    }
  };