const { endSessionService } = require('../services/sessionService.js');

exports.endSessionController = async (req, res) => {
    try {
      const { sessionId } = req.body;
      await endSessionService(sessionId);
      res.status(200).json({ message: 'Session ended' });
    } catch (error) {
      res.status(500).json({ message: 'Error ending session' });
    }
  };