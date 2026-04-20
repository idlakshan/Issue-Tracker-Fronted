import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import AppLayout from "./components/layout/app-layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<AppLayout />}>
        <Route path="/admin" element={<div>Admin Dashboard</div>} />
        <Route path="/admin/issues" element={<div>Admin Issues</div>} />
        <Route path="/admin/assignees" element={<div>Admin Assignees</div>} />
      </Route>
    </Routes>
  );
}

export default App;
