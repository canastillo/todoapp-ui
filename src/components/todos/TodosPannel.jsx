import { useEffect, useState } from "react";

import axios from "axios";

import { Pagination, TodosTable, TodoForm } from "./";
import { Modal, Button } from "../ui";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  
`
const TodosPannel = ({ updateMetrics }) => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const requestTodos = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/todos`);
      setTodos(response.data);
    };

    requestTodos();
  }, []);

  return (
    <Container>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          content={<TodoForm todo={todoToEdit} />}
        />
      )}
      <Button onClick={openModal}>+ New To Do</Button>
      <TodosTable todos={todos} openModal={openModal} setTodoToEdit={setTodoToEdit} updateMetrics={updateMetrics}/>
      <Pagination />
    </Container>
  );
};

export default TodosPannel;
