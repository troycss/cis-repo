import "./TaskItem.css";


const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <button
        onClick={() => onToggle(task.id)}
        className={`task-checkbox ${task.completed ? 'completed' : ''}`}
      >
        {task.completed && <Check size={16} className="check-icon" />}
      </button>
      
      <div className="task-content">
        <p className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </p>
        <p className="task-date">
          {new Date(task.createdAt).toLocaleString()}
        </p>
      </div>
      
      <button onClick={() => onDelete(task.id)} className="task-delete-button">
        <Trash2 size={20} />
      </button>
    </div>
  );
};