import { useState } from "react";
import { Mail, Lock, ShieldHalf } from "lucide-react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";
// import { login } from "../api/auth-service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth-slice";
import { useLoginMutation } from "../redux/api/auth-api";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const res = await login({ email, password });

  //     const { user, accessToken, refreshToken } = res.data;

  //     dispatch(
  //       setUser({
  //         user,
  //         accessToken,
  //         refreshToken,
  //       }),
  //     );

  //     toast.success("Login successful");

  //     if (user.role === "ADMIN") {
  //       navigate("/admin");
  //     } else {
  //       navigate("/dev");
  //     }
  //   } catch (err) {
  //     console.error("Login failed", err);
  //   }
  // };

  const handleLogin = async () => {
    try {
        const res = await login({ email, password }).unwrap();
        console.log("Login Response:", res); // මෙතැන console එක පරීක්ෂා කරන්න දත්ත එන හැටි

        // ඔබේ API එක දත්ත එවන්නේ res.data ඇතුළේ නම්:
        const { user, accessToken, refreshToken } = res.data; 

        if (user && accessToken) {
            dispatch(setUser({ user, accessToken, refreshToken }));
            toast.success("Login successful");
            navigate(user.role === "ADMIN" ? "/admin" : "/dev");
        } else {
            toast.error("Invalid response from server");
        }
    } catch (err) {
        toast.error(err?.data?.message || "Login failed");
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

        <Button className="w-full mb-4" onClick={handleLogin}>
          Sign in
        </Button>

        <p className="text-center text-sm text-(--color-secondary-text)">
          No account?{" "}
          <span
            className="text-(--color-primary) cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
