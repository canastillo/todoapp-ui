import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 50px;
  border: 2px solid black;
  margin-bottom: 30px;
`;

const Form = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

const Label = styled.label`
  display: inline-block;
  width: 70px;
`;

const NameInput = styled.input`
  width: 70%;
`;

const Select = styled.select`
  width: 200px;
`;

const LastField = styled.div`
  display: flex;
  justify-content: space-between;
`;

const submitHandler = (e) => {
  e.preventDefault();
  console.log("Click!");
};

const Filters = () => {
  const [formState, setFormState] = useState({name: "", priority: "", state: null});

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <div>
          <Label htmlFor="name">Name</Label>
          <NameInput type="text" name="name" id="name" />
        </div>
        <div>
          <Label htmlFor="name">Priority</Label>
          <Select name="priority" id="priority" defaultValue={""}>
            <option disabled value={""}>
              All, High, Medium, Low
            </option>
            <option value="">All</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </Select>
        </div>
        <LastField>
          <div>
            <Label htmlFor="name">State</Label>
            <Select name="state" id="state" defaultValue={""}>
              <option disabled value={""}>
                All, Done, Undone
              </option>

              <option value="">All</option>
              <option value="true">Done</option>
              <option value="false">Undone</option>
            </Select>
          </div>
          <input type="submit" value="Search" />
        </LastField>
      </Form>
    </Container>
  );
};

export default Filters;
