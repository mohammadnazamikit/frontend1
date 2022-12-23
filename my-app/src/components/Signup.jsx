import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogInWithThunk, setDataInState } from "../redux/actions";
import Navbar1 from "./Navbar1";
import SignIn from "./Signin";

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
    dataToSave: (dataToState) => {
      dispatch(setDataInState(dataToState));
    },
  };
};

const SignUp = (props) => {
  const baseURL = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  console.log(password, email, checked);

  const navigate = useNavigate();
  const signIn = () => {
    navigate("/signin");
  };

  const signingUp = async () => {
    const obj = {
      passWord: password,
      Email: email,
    };

    const options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    const URL = `${baseURL}/user/register`;
    try {
      if (checked) {
        const response = await fetch(URL, options);
        if (response.ok) {
          const data = await response.json();
          this.props.dataToSave(data);
        } else {
          console.log("error getting data");
        }
      } else {
        console.log("please agree to term and conditions");
      }
    } catch (error) {
      console.log("error in connecting to server :", error);
    } finally {
      signIn();
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
            onChange={(e) => setChecked(e.target.value)}
            label="agree to terms and conditions"
          />
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
