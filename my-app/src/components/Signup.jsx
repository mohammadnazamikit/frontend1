import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogInWithThunk } from "../redux/actions";
import Navbar1 from "./Navbar1";

const mapStateToProps = (state) => {
  return {
    user: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => {
      dispatch(LogInWithThunk());
    },
  };
};

const SignUp = (props) => {
  const baseURL = "";
  const [setEmail, email] = useState("");
  const [setPassword, password] = useState("");
  const [setCheck, check] = useState(false);

  const navigate = useNavigate();
  const signIn = () => {
    navigate("/signin");
  };

  const signingUp = async (obj) => {
    const options = {
      method: "POST",
      Credentials: "include",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    const URL = `${baseURL}/user/register`;
    try {
      const response = await fetch(URL, options);
      if (response.ok) {
        const data = await response.json();
      } else {
        console.log("error getting data");
      }
    } catch (error) {
      console.log("error in connecting to server :", error);
    }
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
                <Form.Control type="email" placeholder="Enter email" />
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
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-center"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="agree to terms and conditions" />
        </Form.Group>
        <Button variant="danger" type="submit" onClick={signingUp}>
          Continue
        </Button>
      </Form>
      <h6>
        Have an account?{" "}
        <a className="text-danger" onClick={signIn}>
          Sign in
        </a>
      </h6>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
