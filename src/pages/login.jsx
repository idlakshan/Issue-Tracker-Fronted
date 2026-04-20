import { useState } from "react";
import { Mail, Lock, ShieldHalf } from "lucide-react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          Sign in
        </h2>
        <p className="text-md text-(--color-secondary-text) mb-6">
          Enter your credentials here
        </p>

        <div className="mb-6">
          <label className="text-sm font-medium text-(--color-secondary-text) mb-1 block">
            Email
          </label>
          <Input
            type="email"
            placeholder="dimuthu@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail size={16} />}
            className="w-full"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-(--color-secondary-text) mb-1 block">
            Password
          </label>
          <Input
            type="password"
            placeholder={"\u2022".repeat(8)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={16} />}
            className="w-full"
          />
        </div>

        <Button className="w-full mb-4">Sign in</Button>

        <p className="text-center text-sm text-(--color-secondary-text)">
          No account?{" "}
          <span
            className="text-(--color-primary) cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
