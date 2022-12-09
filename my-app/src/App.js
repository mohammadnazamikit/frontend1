import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import HomePage from "./components/HomePage";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route link="/" element={<HomePage />} />
        <Route link="/signup/signup" element={<SignUp />} />
        <Route link="/signin/signin" element={<SignIn />} />
      </Routes>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
