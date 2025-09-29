import { useState } from "react";

export default function TaskForm({ addTask, author }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(author, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-900  mb-4  flex gap-2 border-b-2 pb-4 rounded" >
      <input
        type="text"
        className="p-2 rounded text-white w-full"
        placeholder="Escribe una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 mt-3 mr-5 px-4 py-2 rounded">Agregar</button>
    </form>
  );
}
