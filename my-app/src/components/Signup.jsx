import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogInWithThunk, setDataInState } from "../redux/actions";
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
    userEmail: (dataToState) => {
      dispatch(setDataInState(dataToState));
    },
  };
};

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [_id, set_ID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postObj = {
      email: email,
      password: password,
    };
    /*     console.log(postObj); */
    signingUp(postObj);
  };

  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };

  const signingUp = async (obj) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    const URL = `http://localhost:3005/signin/register`;
    try {
      /*   if (checked) { */
      const response = await fetch(URL, options);
      if (response.ok) {
        const data = await response.json();
        /* props.dataToSave(data); */
        /* set_ID(data); */
        console.log(data._id);
        console.log(data.email);
        set_ID(data._id);
        setEmail(data.email);
        props.userEmail(data.email);
      } else {
        console.log("error getting data");
      }
      /*  } else {
        console.log("please agree to term and conditions");
      } */
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
        <Button
          variant="danger"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Continue
        </Button>
      </Form>
      <h6>
        Have an account?{" "}
        <a className="text-danger" onClick={HomePage}>
          Sign in
        </a>
      </h6>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
