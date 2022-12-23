import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { setUserInfo } from "../redux/actions";
import { searchWordWithThunk } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {
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
};

const SearchButton = (props) => {
  const SearchingWord = () => {
    props.searchWord();
    const navigate = useNavigate();
    const toItems = () => {
      navigate("/searchresult");
    };
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => props.getMe(e.target.value)}
      />
      <Button variant="outline-success" onClick={() => SearchingWord()}>
        Search
      </Button>
    </Form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
