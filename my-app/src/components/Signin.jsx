import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  LogInWithThunk,
  setDataInState,
  SignIn_With_Thunk,
} from "../redux/actions";
import Navbar1 from "./Navbar1";
/* 
const mapStateToProps = (state) => {
  return {
    user: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch(setDataInState(data));
    },
  };
};
 */
const SignIn = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate("/signup");
  const signUp = () => {
    navigate("/signup");
  };
  const toHome = () => {
    navigate("/");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const obj = {
      passWord: password,
      Email: email,
    };
    dispatch(SignIn_With_Thunk(obj));
  };

  return (
    <>
      <Navbar1 />
      <h2 className="d-flex m-5 justify-content-start">Sign in</h2>
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
          onChange={(e) => setPassword(e.target.value)}
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
        <Button variant="danger" type="submit" onClick={(e) => handleSignIn(e)}>
          Continue
        </Button>
      </Form>
      <Button className="m-1">sign in with google</Button>
      <h6>
        don't have account?{" "}
        <a className="text-danger" onClick={signUp}>
          sign up
        </a>
      </h6>
    </>
  );
};

export default /* connect(mapStateToProps, mapDispatchToProps) */ SignIn;
