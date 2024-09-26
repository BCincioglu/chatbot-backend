const { generateQuestionService } = require('../services/questionService.js');

exports.getQuestionController = async (req, res) => {
    try {
      const { sessionId } = req.query; // sessionId query parametresinden alınıyor
      if (!sessionId) {
        return res.status(400).json({ message: 'Session ID is required' });
      }
  
      const question = await generateQuestionService(sessionId);
      res.status(200).json({ question });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching question' });
    }
  };