import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Modal = ({ content, closeModal }) => {
  return (
    <>
      <Backdrop onClick={closeModal}/>
      <Container>{content}</Container>
    </>
  );
};

export default Modal;
