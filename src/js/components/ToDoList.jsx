import React, { useState } from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = () => {

    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
            setTasks([...tasks, task])
            setTask("")
            console.log(e)
    }
    const handleDelete = (taskToDelete) =>{
        const result = tasks.filter((_ ,i) => i !== taskToDelete)
        setTasks(result)
        console.log(taskToDelete);
        
    }

    return (
        <>
            <article className="container text-center">
                <h1 className="">My task list</h1>
                <form onSubmit={handleSubmit}>
                    <input required onChange={(e) => setTask(e.target.value)} value={task} type="text" placeholder="add new task!" />
                </form>
                <ul className="">
                    {
                        tasks.map((el, i) => (
                            <ToDoCard index={i} todo={el} key={i} delete={handleDelete} />
                        ))
                    }
                </ul>
                <footer className="pb-3">
                    {tasks.length} task left
                </footer>
            </article>
        </>
    )
}

export default ToDoList