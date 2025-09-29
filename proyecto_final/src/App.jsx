import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import Login from "./pages/Login";
import Register from "./pages/register";
import PrivateRoute from "./routes/privatesroutes";
import { useState, useEffect } from "react";

function Dashboard({ user, tasks, addTask, toggleTask, search, setSearch, logout }) {
  const filteredTasks = tasks.filter(
    (t) =>
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">TEAM TO DO</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>
      <p className="mb-4">Bienvenido, {user} 👋</p>
      <TaskForm addTask={addTask} author={user} />
      <SearchBar setSearch={setSearch} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("loggedUser"));
    if (logged) setUser(logged.username);
  }, []);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (author, text) => {
    const newTask = {
      id: Date.now(),
      author,
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/"
            element={
              <Dashboard
                user={user}
                tasks={tasks}
                addTask={addTask}
                toggleTask={toggleTask}
                search={search}
                setSearch={setSearch}
                logout={logout}
              />
            }
          />
        </Route>

        {/* Si no coincide ninguna ruta, redirige a login */}
        <Route path="*" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}
