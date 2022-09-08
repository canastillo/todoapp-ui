const Pagination = ({
  leftPage,
  centerPage,
  rightPage,
  activePage,
  isBeginning,
  isEnd,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "red",
        justifyContent: "space-around",
        maxWidth: "100px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <a href="">&laquo;</a>
      <a href="">{leftPage}</a>
      <a href="">{centerPage}</a>
      <a href="">{rightPage}</a>
      <a href="">&raquo;</a>
    </div>
  );
};

export default Pagination;
