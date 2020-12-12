import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./containers";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
