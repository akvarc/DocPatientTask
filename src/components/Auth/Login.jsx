import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import {
  getRegisteredUser,
  loginUser,
} from "../../utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = getRegisteredUser();

    if (
      user &&
      user.email === email &&
      user.password === password &&
      user.role === role
    ) {
      loginUser(user);
      navigate(role === "doctor" ? "/doctor" : "/patient");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleLogin}
        className="w-96 border border-black p-6 space-y-4 rounded-xl shadow-2xl hover:drop-shadow-2xl"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <Input  label="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-black px-3 py-2 rounded-md"
        >
          <option className="rounded-md" value="">Select Role</option>
          <option className="rounded-md" value="doctor">Doctor</option>
          <option className="rounded-md" value="patient">Patient</option>
        </select>

        <Button>Login</Button>

        <p className="text-sm text-center">
          Not registered?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
