
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser, logout } from "../../utils/auth";

const PatientDashboard = () => {
  const user = getLoggedInUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("history");

  const medicalHistory = [
    { id: 1, condition: "Diabetes", year: 2021 },
    { id: 2, condition: "BP", year: 2023 },
  ];

  const appointments = [
    { id: 1, doctor: "Dr. Mehta", date: "20 Feb 2026" },
    { id: 2, doctor: "Dr. Sharma", date: "05 Mar 2026" },
  ];

  const healthStats = [
    { label: "Heart Rate", value: "72 bpm" },
    { label: "BP", value: "120/80" },
    { label: "BMI", value: "23.5" },
  ];

  return (
    <div className="p-4 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold">
          Welcome {user?.name}
        </h1>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-black text-white px-4 py-2 rounded-md w-fit"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b mb-6">
        {["history", "appointments", "stats"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm md:text-base ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Medical History */}
      {activeTab === "history" && (
        <div className="overflow-x-auto">
          <table className="min-w-[400px] w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Condition</th>
                <th className="border p-2 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              {medicalHistory.map((m) => (
                <tr key={m.id}>
                  <td className="border p-2">{m.condition}</td>
                  <td className="border p-2">{m.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Appointments */}
      {activeTab === "appointments" && (
        <div className="overflow-x-auto">
          <table className="min-w-[400px] w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Doctor</th>
                <th className="border p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td className="border p-2">{a.doctor}</td>
                  <td className="border p-2">{a.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Health Stats */}
      {activeTab === "stats" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {healthStats.map((s, i) => (
            <div key={i} className="border p-4 text-center">
              <p className="text-sm">{s.label}</p>
              <p className="font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
