import { useState } from "react";
import { ShieldHalf } from "lucide-react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../api/auth-service";


const Register = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();

      toast.success("Account created");
    } catch (err) {
      toast.error("Registration failed", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-(--color-surface) rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-md bg-(--color-primary) flex items-center justify-center text-(--color-surface)">
            <ShieldHalf size={20} />
          </div>
          <h1 className="text-lg font-semibold text-(--color-text)">
            Issue<span className="text-(--color-primary)">Tracker</span>
          </h1>
        </div>

        <h2 className="text-2xl font-semibold mb-1 text-(--color-text)">
          Create account
        </h2>
        <p className="text-md text-(--color-secondary-text) mb-6">
          Register as assignee
        </p>

        <div className="flex gap-4">
          <div className="mb-4">
            <label className="text-sm font-medium text-(--color-secondary-text) mb-1 block">
              First name
            </label>
            <Input
              placeholder="Dimuthu"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-(--color-secondary-text) mb-1 block">
              Last name
            </label>
            <Input
              placeholder="Lakshan"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-(--color-secondary-text) mb-1 block">
            Email
          </label>
          <Input
            type="email"
            placeholder="dimuthu@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-(--color-secondary-text) mb-1 block">
            Password
          </label>
          <Input
            type="password"
            placeholder="Min 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <Button className="w-full mb-4" onClick={handleRegister}>
          Create account
        </Button>

        <p className="text-center text-sm text-(--color-secondary-text)">
          Already have an account?{" "}
          <span
            className="text-(--color-primary) cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
