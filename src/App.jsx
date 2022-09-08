import {
  Layout,
  Filters,
  TodosPannel
} from "./components";

function App() {
  return (
    <div className="App">
      <Layout>
        <Filters />
        <TodosPannel/>
      </Layout>
    </div>
  );
}

export default App;
