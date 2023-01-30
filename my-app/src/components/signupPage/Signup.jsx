import { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LogInWithThunk,
  setDataInState,
  signingUp_With_thunk,
} from "../../redux/actions";
import Popup_Modal from "../model/index";
import Navbar1 from "../Navbar1";
import { setEmail } from "../../redux/actions";
import { signingUp_With_Thunk } from "../../redux/actions";

/* const mapStateToProps = (state) => {
  return {
    user: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => {
      dispatch(LogInWithThunk());
    },
    userEmail: (dataToState) => {
      dispatch(setDataInState(dataToState));
    },
  };
}; */

const SignUp = (props) => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [_id, set_ID] = useState("");
  const dispatch = useDispatch();
  const emailRedux = useSelector((state) => state.EMAIL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postObj = {
      email: email,
      password: password,
    };
    dispatch(signingUp_With_Thunk(postObj));
  };

  const navigate = useNavigate();
  const singInPage = () => {
    navigate("/signin");
  };

  return (
    <>
      <Navbar1 />
      <h2 className="d-flex m-5 justify-content-start">Sign up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Container>
            <Row>
              <Col>
                <Form.Label>Email address</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-start"
          controlId="formBasicPassword"
        >
          <Container>
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            onChange={(e) => setShow(e.target.checked)}
            label="agree to terms and conditions"
          />
        </Form.Group>

        {show && (
          <Button
            variant="danger"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Continue
          </Button>
        )}
      </Form>
      <h6>
        Have an account?{" "}
        <a className="text-danger" onClick={singInPage}>
          Sign in
        </a>
      </h6>
    </>
  );
};
export default SignUp;
