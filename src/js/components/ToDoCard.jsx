import React from "react";

const ToDoCard = (props) => { // usar props para llamar los componentes hijos a window

    const handleClick = () => {
        console.log("voy a eliminar: " + props.todo);
        props.delete(props.index)
    }

    return (
        <li className="px-1">
            <span>{props.todo}</span>
            <button className="trashIcon"><i className="fa-solid fa-trash-can" onClick={handleClick}></i></button>
        </li>
    )
}
export default ToDoCard