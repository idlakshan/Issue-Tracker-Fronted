import { useState } from "react";
import { ShieldHalf } from "lucide-react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../redux/api/auth-api";
import { z } from "zod";

const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const registerSchema = z.object({
    firstName: z.string().min(2, "Enter at least 2 characters"),
    lastName: z.string().min(2, "Enter at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Minimum 8 characters"),
  });

  const handleRegister = async () => {
    const result = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
    });

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      await register({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message);
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
            {errors.firstName && (
              <p className="text-(--color-priority-critical-text) text-xs mt-1">
                {errors.firstName}
              </p>
            )}
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
            {errors.lastName && (
              <p className="text-(--color-priority-critical-text) text-xs mt-1">
                {errors.lastName}
              </p>
            )}
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
          {errors.email && (
            <p className="text-(--color-priority-critical-text) text-xs mt-1">
              {errors.email}
            </p>
          )}
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
          {errors.password && (
            <p className="text-(--color-priority-critical-text) text-xs mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <Button className="w-full mb-4" onClick={handleRegister}>
          Register
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
