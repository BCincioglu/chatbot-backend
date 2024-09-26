const { saveAnswerService } = require('../services/questionService.js');

exports.saveAnswerController = async (req, res) => {
    try {
      const { sessionId, question, answer } = req.body;
      await saveAnswerService(sessionId, question, answer);
      res.status(200).json({ message: 'Answer saved' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving answer' });
    }
  };
  