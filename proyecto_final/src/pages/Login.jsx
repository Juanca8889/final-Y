import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ← usamos el hook para redirigir

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = savedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      setUser(foundUser.username);
      navigate("/"); // ← redirige al dashboard
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-2xl mb-4">Inicia sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-64">
        <input
          type="text"
          placeholder="Usuario"
          className="p-2 rounded bg-white text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="p-2 rounded bg-white text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="bg-blue-500 px-4 py-2 rounded">Entrar</button>
      </form>
      <p className="mt-3 text-sm">
        ¿No tienes cuenta?{" "}
        <button
          className="text-green-400 underline"
          onClick={() => navigate("/register")} // ← redirige a /register
        >
          Regístrate
        </button>
      </p>
    </div>
  );
}
