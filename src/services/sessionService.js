const Session = require('../models/sessionModel');

const getSessionHistoryService = async (sessionId) => {
    try {
      const session = await Session.findOne({ sessionId });
    
      if (!session) {
        throw new Error('Session not found');
      }
    
      return session.questions;
    } catch (error) {
     throw new Error(`Error in getSessionHistory: ${error.message}`);
    }
};
   
   
async function createSessionService(sessionId) {
    try {
        const session = new Session({ sessionId });
        await session.save();
        return session;
    } catch (error) {
    throw new Error(`Error in createSession: ${error.message}`);
    }
};

   
async function endSessionService(sessionId) {
  try {
    const session = await Session.findOne({ sessionId });
    if (!session) throw new Error('Session not found');
  
    session.endTime = Date.now();
    await session.save();
    return session;
  } catch (error) {
    throw new Error(`Error in endSession: ${error.message}`);
  }
};

module.exports = {
    createSessionService,
    endSessionService,
    getSessionHistoryService,
  };


