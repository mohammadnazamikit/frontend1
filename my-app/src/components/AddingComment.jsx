import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const AddingComment = () => {
  const navigateHome = () => Navigate("/");
  return (
    <>
      <h3 className="d-flex justify-content-start">adding Comment</h3>
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
                <Form.Label>Comment</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="Comment" />
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <Button variant="danger" type="submit" onClick={navigateHome}>
          Add comment
        </Button>
      </Form>
    </>
  );
};

export default AddingComment;
