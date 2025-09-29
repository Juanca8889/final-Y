import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask }) {
  if (tasks.length === 0) {
    return <p className="text-gray-400">No hay tareas 🚀</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}
