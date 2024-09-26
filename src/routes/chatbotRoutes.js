// routes/chatbotRoutes.js
const express = require('express');
const { endSessionController } = require('../controllers/endSessionController.js')
const { getHistoryController } = require('../controllers/getHistoryController.js')
const { getQuestionController} = require('../controllers/getQuestionController.js')
const { saveAnswerController } = require('../controllers/saveAnswerController.js')
const { startSessionController } = require('../controllers/startSessionController.js')


const router = express.Router();

router.post('/start-session', startSessionController);      // Oturum başlatma
router.get('/question', getQuestionController);             // Soru alma
router.post('/answer', saveAnswerController);               // Cevap gönderme
router.post('/end-session', endSessionController);        // Oturum kapatma
router.get('/history', getHistoryController); // Yeni route, sessionId ile oturum geçmişini döndür

module.exports = router;
