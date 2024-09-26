# Chatbot Application

## Overview
Chatbot Application is a web-based application where users can interact with a bot that asks 10 predefined questions. The user's answers are tracked and stored in a MongoDB database. The application also has the ability to generate dynamic questions using OpenAI's API (if integrated).

## Installation Steps

### 1. Clone the Application

First, clone the repository to your local machine using the following command:

```sh
git clone https://github.com/BCincioglu/chatbot-backend.git
```

### 2. Install Dependencies

Navigate into the project directory and install the necessary dependencies:

```sh
cd chatbot-backend
npm install
```

### 3. Database Setup

Configure your MongoDB URI in the .env file, Mongoose will automatically create the necessary database tables when you run the application.


### 4. Environment Variables

You should also configure your OpenAI API key in the .env file (if using OpenAI):


### 5. Run the Application

Finally, run the application using the following command:

```sh
npm start
```

