import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter, Router } from "react-router-dom";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <BrowserRouter>
      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
    </BrowserRouter>
  );
}

export default App;
