import Login from "./pages/login/Login";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const ForgotPassword = lazy(
  () => import("./pages/forgot-password/ForgotPassword")
);
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Register = lazy(() => import("./pages/register/Register"));

function App() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
