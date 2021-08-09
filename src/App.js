import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import MainLayout from "./components/common/main.layout";

const App = () => (
  <Router>
    <MainLayout />
  </Router>
)

export default App;
