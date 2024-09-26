const { getSessionHistoryService } = require('../services/sessionService.js');

exports.getHistoryController = async (req, res) => {
    try {
      const { sessionId } = req.query;
      
      if (!sessionId) {
        return res.status(400).json({ message: 'Session ID is required' });
      }
  
      const history = await getSessionHistoryService(sessionId);
  
      res.status(200).json({ history });
    } catch (error) {
      if (error.message === 'Session not found') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: 'Error fetching session history', error: error.message });
    }
  };
  