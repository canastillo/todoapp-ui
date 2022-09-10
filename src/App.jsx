import { useEffect, useState } from "react";
import axios from "axios";
import {
  Layout,
  Filters,
  TodosPannel,
  Metrics,
} from "./components";

function App() {
  const [metrics, setMetrics] = useState({});

  const getMetrics = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/metrics`);
    setMetrics(response.data);
  }
  
  useEffect(() => {
    getMetrics();
  }, [])

  return (
    <div className="App">
      <Layout>
        <Filters />
        <TodosPannel updateMetrics={getMetrics}/>
        <Metrics metrics={metrics}/>
      </Layout>
    </div>
  );
}

export default App;
