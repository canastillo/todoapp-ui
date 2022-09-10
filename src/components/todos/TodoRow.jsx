import { useEffect, useState } from "react";
import axios from "axios";

const TodoRow = ({ todo, openModal, setTodoToEdit, updateMetrics }) => {
  const [isDone, setIsDone] = useState(todo.done);

  const toggleState = async () => {
    let path = isDone ? "undone" : "done";

    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/todos/${todo.id}/${path}`
    );

    setIsDone(response.data.done);
    // newTodoHandler();
    updateMetrics();
  };

  const editHandler = () => {
    setTodoToEdit(todo);
    openModal();
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name="state"
          id="state"
          checked={isDone}
          onChange={toggleState}
        />
      </td>
      <td>{todo.name}</td>
      <td>{todo.priority.charAt(0) + todo.priority.slice(1).toLowerCase()}</td>
      <td>{todo.dueDate || "-"}</td>
      <td>
        <button onClick={editHandler}>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TodoRow;
