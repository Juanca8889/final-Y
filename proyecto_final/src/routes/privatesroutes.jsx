import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  return user ? <Outlet /> : <Navigate to="/login" />;
}
