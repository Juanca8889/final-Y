import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask }) {
  if (tasks.length === 0) {
    return <p className="text-lg text-white-400 text-center mt-4">NO SE ENCUENTRAN TAREAS🔴</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}
