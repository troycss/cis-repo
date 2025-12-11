import "./TaskList.css";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state-title">No tasks found</p>
        <p className="empty-state-subtitle">Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};