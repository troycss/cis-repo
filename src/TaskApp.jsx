import { useEffect } from "react";

function TaskApp() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        document.title - `You have ${task.length} tasks`;
    }, [task]);

    const addTask = () => {
        setTask([...task, { id: Date.now(), title: newTask }]);
        setNewTask('');
    };
}
