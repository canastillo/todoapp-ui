const submitHandler = (e) => {
    e.preventDefault();
    console.log("Click!")
}

const Filters = () => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="name">Priority</label>
        <select name="priority" id="priority">
            <option value="">All</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">State</label>
        <select name="state" id="state">
            <option value="">All</option>
            <option value="true">Done</option>
            <option value="false">Undone</option>
        </select>
      </div>
      <input type="submit" value="Search" />
    </form>
  );
};

export default Filters;
