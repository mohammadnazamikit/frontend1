import { connect } from "react-redux";
import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LogInWithThunk, setDataInState } from "../redux/actions";
import Navbar1 from "./Navbar1";

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

const SignIn = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate("/signup");
  const signUp = () => {
    navigate("/signup");
  };
  const toHome = () => {
    navigate("/");
  };

  const SigningIn = async () => {
    const url = "";

    const obj = {
      passWord: password,
      Email: email,
    };
    const options = {
      method: "Get",
      Credential: "include",
      body: JSON.stringify(obj),
    };
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        this.props.setData(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      toHome();
    }
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
        <Button variant="danger" type="submit" onClick={SigningIn}>
          Continue
        </Button>
      </Form>
      <h6>Sign in with google account</h6>
      <Button>
        <Image src="../images/googleimage.png" height="20px" />
      </Button>
      <h6>
        don't have account?{" "}
        <a className="text-danger" onClick={signUp}>
          sign up
        </a>
      </h6>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
