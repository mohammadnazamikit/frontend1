import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

const SignUp = () => {
  const navigate = useNavigate();
  const signIn = () => {
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
        <Button variant="danger" type="submit">
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
export default SignUp;
