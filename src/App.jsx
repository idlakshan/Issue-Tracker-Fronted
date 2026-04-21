import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import AppLayout from "./components/layout/app-layout";
import Dashboard from "./pages/dashboard";
import AllIssues from "./pages/all-issue";
import ProtectedRoute from "./components/layout/protected-layout";
import { useSelector } from "react-redux";

function App() {
  const { user, accessToken } = useSelector((state) => state.auth);
  console.log(user, accessToken);
  
  const getDefaultRoute = () => {
    if (!accessToken || !user) return "/login";
    return user.role === "ADMIN" ? "/admin" : "/dev";
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />

      <Route path="/login" element={!accessToken ? <Login /> : <Navigate to={getDefaultRoute()} replace />} />
      <Route path="/register" element={!accessToken ? <Register /> : <Navigate to={getDefaultRoute()} replace />} />

      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/issues" element={<AllIssues />} />
           <Route path="/admin/assignees" element={<div>Assignees</div>} />
        </Route>
      </Route>


      <Route element={<ProtectedRoute allowedRoles={["DEV"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/dev" element={<div>Developer Dashboard</div>} />
          <Route path="/dev/my-tasks" element={<div>My Tasks</div>} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
    </Routes>
  );
}

export default App;