import styled from "styled-components";

const Container = styled.div`
  margin-top: 200px;
  display: "flex";
  flex-direction: row;
  justify-content: space-around;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Pagination = ({
  leftPage,
  centerPage,
  rightPage,
  activePage,
  isBeginning,
  isEnd,
}) => {
  return (
    <Container>
      <a href="">&laquo;</a>
      <a href="">{leftPage}</a>
      <a href="">{centerPage}</a>
      <a href="">{rightPage}</a>
      <a href="">&raquo;</a>
    </Container>
  );
};

export default Pagination;
