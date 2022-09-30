import { useState } from "react";
import styled from "styled-components";
import { submitTodoHandler } from "../../helpers/helpers";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 300px;
  justify-content: space-around;
`;

const Asterics = styled.span`
  color: red;
`

const Label = styled.label`
  display: inline-block;
  width: 80px;
`

const Input = styled.input`
  width: 200px;
`

const Select = styled.select`
  width: 200px;
`

const Message = styled.small`
  color: #777;
`

const TodoForm = ({ todo, setTodos }) => {
  const [newData, setNewData] = useState(todo || {});
  let isEditing = todo ? true : false;

const submitHandler = async (e) => {
  e.preventDefault();
  let newTodo;
  newTodo = await submitTodoHandler(todo, newData, isEditing);

  if(newTodo) {
    if (isEditing) {
      
    } else {
      // setTodos((prevState) => {
      //   return {
      //     ...prevState,
      //     newTodo
      //   }
      // })
    }
  }
}

  const nameChangeHandler = (e) => {
    setNewData((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
  };

  const priorityChangeHandler = (e) => {
    setNewData((prevState) => {
      return {
        ...prevState,
        priority: e.target.value,
      };
    });
  }

  const dueDateChangeHandler = (e) => {
    setNewData((prevState) => {
      return {
        ...prevState,
        dueDate: e.target.value,
      };
    });
  }

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <Label htmlFor="name"><Asterics>*</Asterics>Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={newData.name || ""}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <Label htmlFor="priority"><Asterics>*</Asterics>Priority:</Label>
        <Select name="priority" id="priority" defaultValue={newData.priority || ""} onChange={priorityChangeHandler}>
          <option disabled value="">
            High, Medium, Low
          </option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="due-date">Due Date:</Label>
        <Input type="date" name="due-date" id="due-date" value={newData.dueDate || ""} onChange={dueDateChangeHandler}/>
      </div>
      <input type="submit" value={ isEditing ? "Update To Do" : "Create To Do"} />
      <Message><Asterics>*</Asterics>Obligatory fields</Message>
    </Form>
  );
};

export default TodoForm;
