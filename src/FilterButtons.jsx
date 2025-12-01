import { useState } from 'react';

function TaskList() {
    const[task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTask([...task, { id: task.length + 1, title: newTask }]);
        setNewTask('');
    }
    const removeTask = (id) => {
        setTask(task.filter(t => t.id !== id));
    }
    return (
        <div>
            <input value= {newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskList;