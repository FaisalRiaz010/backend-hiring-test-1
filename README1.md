# TuringTech IVR Call Forwarding System

A simple backend project to handle inbound IVR calls using Twilio. Based on user input:

- Pressing `1` forwards the call to your phone
- Pressing `2` records a voicemail
- All calls are logged into MongoDB
- API endpoints to retrieve logs and recordings

---

##  Tech Stack

- **Node.js** with **Express**
- **MongoDB** via Mongoose
- **Twilio Voice API**
- **Swagger** for API documentation
- **ngrok** for local testing with Twilio

---

##  Folder Structure
project-root/
├── controllers/ # Handles Twilio logic
├── models/ # Mongoose schema for Call
├── routes/ # API routes
├── swagger.js # Swagger config
├── .env # Environment variable sample
├── index.js # Main app entry
├── package.json
└── README.md

## How to Start the Project
# 1. Clone the repository

git clone https://github.com/your-username/turingtech-ivr.git


# 2. Install Dependencies
npm install

# 3. Set up environment variables
set environments in .env file

# 4. Run the Server
npm start 
npm run dev

