import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AppLayout from "./components/layout/app-layout";
import Dashboard from "./pages/dashboard";
import AllIssues from "./pages/all-issue";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AppLayout />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/issues" element={<AllIssues />} />
        <Route path="/admin/assignees" element={<div>Admin Assignees</div>} />
      </Route>
    </Routes>
  );
}

export default App;
