import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`

`

const SubmitButton = styled.input.attrs({ 
  type: 'submit',
  value: 'Create To Do'
})`
`
const TodoForm = ({ todo }) => {
  const [newData, setNewData] = useState(todo || {});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Click!")
  };

  const nameChangeHandler = (e) => {
    setNewData( prevState => {
      return {
        ...prevState, 
        "name": e.target.vale
      }
    })
  }

  return (
    <Form onSubmit={submitHandler}>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={newData.name || ""} onChange={nameChangeHandler}/>
    </div>
    <div>
      <label htmlFor="priority">Priority:</label>
      <select name="priority" id="priority">
        <option value="HIGH">High</option>
        <option value="MEDIUM">Medium</option>
        <option value="LOW">Low</option>
      </select>
    </div>
    <div>
      <label htmlFor="due-date">Due Date:</label>
      <input type="date" name="due-date" id="due-date" />
    </div>
    <SubmitButton />
    </Form>
  )
};

export default TodoForm;