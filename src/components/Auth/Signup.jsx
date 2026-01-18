import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { saveRegisteredUser } from "../../utils/auth";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.role) {
      alert("All fields required");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    saveRegisteredUser(form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 border border-black p-6 space-y-4 rounded-xl shadow-2xl hover:drop-shadow-2xl" 
      >
        <h2 className="text-xl font-semibold text-center">Signup</h2>

        <Input label="Full Name" name="name" onChange={handleChange} />
        <Input label="Email" name="email" onChange={handleChange} />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full border border-black px-3 py-2"
        >
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>

        <Button>Create Account</Button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
