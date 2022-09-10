import styled from "styled-components";
import { TodoRow } from ".";

const Table = styled.table`
width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  margin-top: 20px;

  & > * > tr > * {
    border: 1px solid black;
    border-collapse: collapse;
    padding-left: 10px;
  }
`

const HeadersRow = styled.thead`
  background-color: #CCC;
`

const TodosTable = ({ todos, openModal, setTodoToEdit, updateMetrics }) => {
  return (
    <Table>
      <HeadersRow>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </HeadersRow>
      <tbody>
        {todos.map((todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
            openModal={openModal}
            setTodoToEdit={setTodoToEdit}
            updateMetrics={updateMetrics}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default TodosTable;
