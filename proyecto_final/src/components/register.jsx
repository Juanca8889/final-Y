import { useState } from "react";

export default function Register({ setView }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        // Leer usuarios ya guardados
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar si ya existe
        const exists = savedUsers.find((u) => u.username === username);
        if (exists) {
            setError("El usuario ya existe");
            return;
        }

        // Guardar nuevo usuario
        savedUsers.push({ username, password });
        localStorage.setItem("users", JSON.stringify(savedUsers));

        alert("Usuario registrado con éxito");

        // Cambiar a login después de registrar
        setView("login");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
            <h2 className="text-2xl mb-4">Regístrate</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-3 w-64">
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
                    pattern="^(?=.*[A-Z]).{8,}$"
                    title="Debe tener mínimo 8 caracteres y al menos una mayúscula"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button className="bg-green-500 px-4 py-2 rounded">Registrar</button>
            </form>
            <p className="mt-3 text-sm">
                ¿Ya tienes cuenta?{" "}
                <button
                    className="text-blue-400 underline"
                    onClick={() => setView("login")}
                >
                    Inicia sesión
                </button>
            </p>
        </div>
    );
}
