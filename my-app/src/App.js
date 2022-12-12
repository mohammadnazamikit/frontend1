import logo from "./logo.svg";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import HomePage from "./components/HomePage";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import SearchResult from "./components/searchresultpage";
import SingleItem from "./components/SingleItempage";
import AddCommentPage from "./components/AddCommentPage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => {
      dispatch();
    },
  };
};

function App(props) {
  useEffect(() => {
    props.getMe();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/singleItem" element={<SingleItem />} />
          <Route path="/AddCommetPage" element={<AddCommentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
