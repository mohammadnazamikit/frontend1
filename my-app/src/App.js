import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter, Router } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
