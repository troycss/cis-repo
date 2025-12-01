function TaskCard() {
  return (
    <div className="task-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {isActive ? (
        <span className= "status active">Active</span>
      ) : (
        <span className="status inactive">Inactive</span>
      )}
    </div>
  );
}

export default TaskCard;