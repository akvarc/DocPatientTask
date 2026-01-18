🏥 Doctor–Patient Role-Based Dashboard

React • Vite • Tailwind CSS

A modern role-based authentication and dashboard system built using React (JavaScript) and Tailwind CSS.
The application supports Doctor and Patient roles with protected routes, tab-based dashboards, and dummy medical data.

🚀 Live Features
🔐 Authentication

Signup & Login

Role selection (Doctor / Patient)

Basic form validation

Session-based authentication using localStorage

Proper logout handling (no credential loss)

🧑‍⚕️ Doctor Dashboard

Welcome message

Tab-based sections:

Patients list (table)

Appointments overview

Prescription / Diagnosis (UI only)

Clean, structured tables

Logout button at top-right

🧑‍💻 Patient Dashboard

Welcome message

Tab-based sections:

Medical history summary

Upcoming appointments

Health statistics (cards)

Clean and responsive UI

Logout button at top-right

🛠 Tech Stack

React (JavaScript)

Vite

Tailwind CSS

React Router DOM

LocalStorage (authentication simulation)

📁 Project Structure
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── Dashboard/
│   │   ├── DoctorDashboard.jsx
│   │   └── PatientDashboard.jsx
│   └── UI/
│       ├── Button.jsx
│       └── Input.jsx
├── utils/
│   └── auth.js
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/doctor-patient-dashboard.git
cd doctor-patient-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


App will run on:

http://localhost:5173

🔑 Authentication Design

The project follows a clean auth separation pattern:

Registered User → stored permanently

Logged-in User (Session) → stored temporarily

Storage Keys

registeredUser

loggedInUser

This avoids the common issue where logout breaks future logins.

🎨 UI / UX

Black & White minimal theme

Tailwind utility-first styling

Tab-based navigation

Responsive layout

Clean spacing & typography

🧪 Dummy Data

Static dummy data for:

Patients

Appointments

Medical history

Health stats

Easy to replace with backend APIs

🔐 Route Protection

Doctor routes → accessible only to Doctor

Patient routes → accessible only to Patient

Unauthorized access redirects to login

📌 Future Improvements

Context API for global auth state

Multiple users support

Backend (JWT + Node.js)

Charts for health stats

Pagination & search

Reusable Tabs component

💬 Interview Talking Points

Role-based routing & access control

Auth session vs persistent user separation

Tab-based scalable UI design

Clean folder structure

Tailwind best practices

📄 License

This project is created for learning, demo, and interview purposes.
