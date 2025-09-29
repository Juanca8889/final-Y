export default function TaskItem({ task, toggleTask }) {
  return (
    <li
      className="bg-gray-800 p-3 rounded flex justify-between items-center"
    >
      <div>
        <p className={`font-semibold ${task.completed ? "line-through" : ""}`}>
          {task.text}
        </p>
        <span className="text-sm text-gray-400">Autor: {task.author}</span>
      </div>
      <button
        className="bg-green-500 px-3 py-1 rounded"
        onClick={() => toggleTask(task.id)}
      >
        {task.completed ? "Desmarcar" : "Completar"}
      </button>
    </li>
  );
}
