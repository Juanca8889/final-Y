import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import Login from "./components/Login";
import Register from "./components/register";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login");

  // Cargar usuario si ya estaba logueado
  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("loggedUser"));
    if (logged) setUser(logged.username);
  }, []);

  // Cargar tareas desde localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Crear tarea nueva
  const addTask = (author, text) => {
    const newTask = {
      id: Date.now(),
      author,
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Marcar tarea completada
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Filtrar tareas
  const filteredTasks = tasks.filter(
    (t) =>
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase())
  );

  // 🔴 Función logout
  const logout = () => {
    localStorage.removeItem("loggedUser"); // elimina la sesión guardada
    setUser(null); // vuelve al login
    setView("login");
  };

  // Si no hay usuario → mostrar login o registro
  if (!user) {
    return view === "login" ? (
      <Login setUser={setUser} setView={setView} />
    ) : (
      <Register setView={setView} />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">TEAM TO DO</h1>
        {/* Botón logout */}
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>
      <p className="mb-4 ">Bienvenido, {user} 👋</p>
      <TaskForm addTask={addTask} author={user} />
      <SearchBar setSearch={setSearch} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
}
