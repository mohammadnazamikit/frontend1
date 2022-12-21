import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

const SignIn = () => {
  const navigate = useNavigate("/signup");
  const signUp = () => {
    navigate("/signup");
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
        <Button variant="danger" type="submit">
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

export default SignIn;
