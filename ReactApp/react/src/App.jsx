import "App.css";

export default function App() { 
    const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      text: "Welcome to your Task Manager!",
      completed: false,
      createdAt: new Date()
    }
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();
  const activeCount = tasks.filter(task => !task.completed).length;
  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">Task Manager</h1>
        <p className="app-subtitle">Organize your day, one task at a time</p>

        <TaskInput onAddTask={addTask} />

        <div className="task-stats">
          <span className="stat-item">
            <strong>{activeCount}</strong> active
          </span>
          <span className="stat-divider">·</span>
          <span className="stat-item">
            <strong>{completedCount}</strong> completed
          </span>
          <span className="stat-divider">·</span>
          <span className="stat-item">
            <strong>{tasks.length}</strong> total
          </span>
        </div>

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}