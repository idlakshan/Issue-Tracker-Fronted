import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AppLayout from "./components/layout/app-layout";
import Dashboard from "./pages/dashboard";
import AllIssues from "./pages/all-issue";
import ProtectedRoute from "./components/layout/protected-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/issues" element={<AllIssues />} />
          <Route path="/admin/assignees" element={<div>Assignees</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
