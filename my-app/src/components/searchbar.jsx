import { connect, useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { setUserInfo } from "../redux/actions";
import { searchWordWithThunk } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* const mapStateToProps = (state) => {
  return {
    user: state.userinfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: (data) => {
      dispatch(setUserInfo(data));
    },
    searchWord: (data) => {
      dispatch(searchWordWithThunk(data));
    },
  };
}; */

const SearchButton = (props) => {
  const dispatch = useDispatch();
  const itemsSearchFromRedux = useSelector((state) => state.searchword);
  const [searchWord, setSearchWord] = useState(null);
  const SearchingWord = () => {
    dispatch(searchWordWithThunk(searchWord));
    const navigate = useNavigate();
    navigate("/searchresult");
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <Button
        style={{ background: "black" }}
        variant="outline-success"
        onClick={() => SearchingWord(searchWord)}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchButton;
