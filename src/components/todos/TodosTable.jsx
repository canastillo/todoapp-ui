import { TodoRow } from ".";

const TodosTable = ({ todos, openModal, setTodoToEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
            openModal={openModal}
            setTodoToEdit={setTodoToEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodosTable;
