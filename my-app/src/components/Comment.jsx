import { Container, Row } from "react-bootstrap";

const Comments = () => {
  let CMT = ["first comment", "second comment", "third comment"];
  return (
    <>
      <h2 className="ms-5 d-flex justify-content-start">Comments</h2>
      {CMT.map((comment) => {
        return (
          <Container className="d-flex justify-content-start">
            <h4>{comment}</h4>
          </Container>
        );
      })}
    </>
  );
};
export default Comments;
