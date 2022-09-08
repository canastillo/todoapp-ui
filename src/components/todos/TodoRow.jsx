import { useEffect, useState } from "react";

const TodoRow = ({ todo, openModal, setTodoToEdit }) => {
    const [isDone, setIsDone] = useState(todo.state);
    
    const toggleState = () => {
        setIsDone(!isDone);
    }

    const editHandler = () => {
        setTodoToEdit(todo);
        openModal();
    }

    return (
        <tr>
            <td>
                <input type="checkbox" name="state" id="state" checked={isDone} onChange={toggleState}/>
            </td>
            <td>
                {todo.name}
            </td>
            <td>
                {todo.priority.charAt(0) + todo.priority.slice(1).toLowerCase()}
            </td>
            <td>
                {todo.dueDate || "-"}
            </td>
            <td>
                <button onClick={editHandler}>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default TodoRow;