function TaskList() {
    const tasks = [
        { id: 1, title: 'Task One' },
        { id: 2, title: 'Task Two' },
        { id: 3, title: 'Task Three' }
    ];

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskCard 
                key={task.id} 
                title={task.title}
                status={task.status} 
                />
            ))}
        </div>
    );
}
    