const Session = require('../models/sessionModel');
// const openai = require('../config/apiConfig.js');

const staticQuestions = [
  " What is your favorite breed of cat, and why? ",
  " How do you think cats communicate with their owners? ",
  " Have you ever owned a cat? If so, what was their name and personality like? ",
  " Why do you think cats love to sleep in small, cozy places? ",
  " What’s the funniest or strangest behavior you’ve ever seen a cat do? ",
  " Do you prefer cats or kittens, and what’s the reason for your preference? ",
  " Why do you think cats are known for being independent animals? ",
  " How do you think cats manage to land on their feet when they fall? ",
  " What’s your favorite fact or myth about cats? ",
  " How would you describe the relationship between humans and cats in three words? "
];


/* Actually, I started to develop the application using OpenAI API,
but due to a mistake I made on the frontend without realizing it, 
I used up the tokens because I made thousands of requests during 
the test, so I implemented it with static queries. */

async function generateQuestionService(sessionId) {
  try {
    const session = await Session.findOne({ sessionId });

    if (!session) {
      throw new Error('Session not found');
    }

    if (session.questions.length >= 10) {
      await endSession(sessionId);
      return 'Thank you! The session is now complete.';
    }

    let questionIndex = session.questionIndex || 0;

    if (session.questions.length <= questionIndex) {
      const currentQuestion = staticQuestions[questionIndex];
      return currentQuestion; // Aynı soruyu döndür
    }

    questionIndex = (questionIndex + 1) % staticQuestions.length; 
    session.questionIndex = questionIndex; 
    await session.save(); 

    return staticQuestions[questionIndex];
  } catch (error) {
    throw new Error(`Error in generateQuestion: ${error.message}`);
  }
}


async function saveAnswerService(sessionId, question, answer) {
  try {
    const session = await Session.findOne({ sessionId });
    if (!session) throw new Error('Session not found');
  
    session.questions.push({ question, answer });
    await session.save();
  
    if (session.questions.length >= 10) {
      await endSession(sessionId);
    }
  
    return session;
  } catch (error) {
    throw new Error(`Error in saveAnswer: ${error.message}`);
  }
}

module.exports = {
  generateQuestionService,
  saveAnswerService,
};
