import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));  // traigo el usuario logueado del local storage y redirige a la ruta segun si esta o no esta

  return user ? <Outlet /> : <Navigate to="/login" />;
}
