🧠 Resume Screening & Skill Match System (Backend)   :: A Node.js + Express backend system that automates resume screening and skill matching using AI-based text processing.
This project is designed to simulate how HR platforms and ATS (Applicant Tracking Systems) evaluate candidates based on job requirements.

🚀 Project Overview  :: This backend application allows recruiters or systems to:

   Upload candidate resumes (PDF)

   Extract skills using AI-based text processing

   Match candidate skills with job requirements

   Generate a match score

   Secure APIs using JWT authentication

   The system is scalable, modular, and easy to integrate with any frontend or third-party service.

🧩 Features
   ✅ Resume Management

  Upload resumes (PDF format)

   Extract text from resumes

  Identify technical & soft skills automatically

✅ Job Matching

   Store job descriptions

   Compare resume skills with job requirements

   Generate match percentage

✅ Authentication (JWT)

   User registration & login

   Secure protected routes

   Token-based authentication

✅ Clean Architecture

   MVC structure
  
   Reusable utilities

  Easy to maintain & extend

Tech Stack

   Frontend: React.js / HTML + CSS + JS

   Backend: Node.js + Express.js

   Database: MongoDB 

   AI/Skill Extraction: OpenAI API, Hugging Face Transformers, or spaCy

   File Upload: Multer (Node.js)

   Authentication (Optional): JWT  Auth



Project Structure
backend/
│
├── controllers/
│   ├── authController.js       # Login & register logic
│   ├── resumeController.js     # Resume upload & parsing
│   └── jobController.js        # Job posting & matching
│
├── models/
│   ├── User.js                 # User schema
│   ├── Resume.js               # Resume schema
│   └── Job.js                  # Job schema
│
├── routes/
│   ├── authRoutes.js
│   ├── resumeRoutes.js
│   └── jobRoutes.js
│
├── middleware/
│   └── authMiddleware.js       # JWT protection
│
├── utils/
│   ├── skillExtractor.js       # Extracts skills from resume text
│   └── matcher.js              # Calculates match score
│
├── config/
│   └── db.js                   # MongoDB connection
│
├── uploads/                    # Uploaded resumes
│
├── server.js                   # Entry point
├── package.json
└── .env.example
