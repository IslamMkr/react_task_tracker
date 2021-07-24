import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([])
    const [isAddTaskFormVisible, setAddTaskFormVisibility] = useState(false)

    // Delete a task
    const deleteTask = (id) => {
        setTasks(
            tasks.filter (
                task => id !== task.id
            )
        )
    }

    // Toggle task reminder
    const toggleReminder = (id) => {
        console.log(id)
        setTasks(
            tasks.map (
                task => (
                    (task.id === id) ? { ...task, reminder: !task.reminder} : task
                )
            )
        )
    }

    // Adding a task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task}

        setTasks([...tasks, newTask])
    }

    return (
        <div className="container">
            <Header 
                onAdd={() => setAddTaskFormVisibility(!isAddTaskFormVisible)}
                formVisibility={isAddTaskFormVisible} />

            {/* 
                We only show the add task form when the state
                of the add task form is true.
                The change of the state is triggered when the user
                clicks on the 'Add' button.   
            */}
            {isAddTaskFormVisible && <AddTask onAdd={addTask}/>}

            <Tasks 
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={toggleReminder}/>
        </div>
    );
}

export default App;
