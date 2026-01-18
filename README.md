# 🏥 Doctor–Patient Role-Based Dashboard  

**React • Vite • Tailwind CSS**

A modern **role-based authentication and dashboard system** built with **React (JavaScript)** and **Tailwind CSS**.  
The application supports **Doctor** and **Patient** roles with protected routes, tab-based dashboards, and dummy medical data.

---

## 🚀 Features

### 🔐 Authentication
- Signup & Login  
- Role selection (**Doctor / Patient**)  
- Basic form validation  
- Session-based authentication using **localStorage**  
- Proper logout handling *(no credential loss)*  

---

### 🧑‍⚕️ Doctor Dashboard
- Personalized welcome message  
- **Tab-based navigation**
  - Patients list (table)
  - Appointments overview
  - Prescription / Diagnosis *(UI only)*  
- Clean, structured tables  
- Logout button (top-right)

---

### 🧑‍💻 Patient Dashboard
- Personalized welcome message  
- **Tab-based navigation**
  - Medical history summary
  - Upcoming appointments
  - Health statistics (cards)  
- Clean & responsive UI  
- Logout button (top-right)

---

## 🛠 Tech Stack
- ⚛️ React (JavaScript)
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔀 React Router DOM
- 💾 LocalStorage (authentication simulation)

---

## 📁 Project Structure

```bash
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
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/doctor-patient-dashboard.git
cd doctor-patient-dashboard
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```

📍 App runs at:  
**http://localhost:5173**

---

## 🔑 Authentication Design

The project follows a **clean auth separation pattern**:

- **Registered User** → stored permanently  
- **Logged-in User (Session)** → stored temporarily  

### Storage Keys
```text
registeredUser
loggedInUser
```

✅ Prevents logout from breaking future logins.

---

## 🎨 UI / UX
- Black & White minimal theme  
- Tailwind utility-first styling  
- Tab-based navigation  
- Responsive layout  
- Clean spacing & typography  

---

## 🧪 Dummy Data
Static dummy data included for:
- Patients  
- Appointments  
- Medical history  
- Health statistics  

🔁 Easy to replace with backend APIs.

---

## 🔐 Route Protection
- **Doctor routes** → Doctor only  
- **Patient routes** → Patient only  
- Unauthorized access redirects to **Login**

---

## 📌 Future Improvements
- Context API for global auth state  
- Multiple users support  
- Backend (JWT + Node.js)  
- Charts for health statistics  
- Pagination & search  
- Reusable Tabs component  

---

## 💬 Interview Talking Points
- Role-based routing & access control  
- Session vs persistent auth design  
- Scalable tab-based UI  
- Clean folder structure  
- Tailwind CSS best practices  

---

## 📄 License
Created for **learning, demo, and interview purposes**.
