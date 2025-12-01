function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>Status: {task.status ? 'Active' : 'Inactive'}</p>
    </div>
  );
}