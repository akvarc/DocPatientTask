import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, logout } from "../../utils/auth";

const DoctorDashboard = () => {
  const user = getLoggedInUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("patients");

  // Dummy Data
  const patients = [
    { id: 1, name: "Rahul Sharma", age: 32, condition: "Diabetes" },
    { id: 2, name: "Anita Verma", age: 28, condition: "BP" },
  ];

  const appointments = [
    { id: 1, patient: "Rahul Sharma", time: "10:30 AM" },
    { id: 2, patient: "Anita Verma", time: "12:00 PM" },
  ];

  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Welcome Dr. {user?.name}
        </h1>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {["patients", "appointments", "prescriptions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Patients Tab */}
      {activeTab === "patients" && (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Condition</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.age}</td>
                <td className="border p-2">{p.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Appointments Tab */}
      {activeTab === "appointments" && (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Patient</th>
              <th className="border p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id}>
                <td className="border p-2">{a.patient}</td>
                <td className="border p-2">{a.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Prescription Tab (UI Only) */}
      {activeTab === "prescriptions" && (
        <div className="border p-4 space-y-2">
          <p><strong>Patient:</strong> Rahul Sharma</p>
          <p><strong>Diagnosis:</strong> Type 2 Diabetes</p>
          <p><strong>Prescription:</strong> Metformin 500mg</p>
          <p className="text-sm text-gray-500">
            * UI only, no backend connected
          </p>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
