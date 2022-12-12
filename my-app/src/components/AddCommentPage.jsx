import { Col, Container, Image, Row } from "react-bootstrap";
import AddingComment from "./AddingComment";
import Comments from "./Comment";
import Footer from "./footer";
import Navbar1 from "./Navbar1";
import Stars from "./Stars";

const AddCommentPage = () => {
  return (
    <>
      <Navbar1 />
      <Container>
        <Row>
          <Col>
            <Image></Image>
          </Col>
          <Col>
            <Container>
              <h4>short description</h4>
            </Container>
          </Col>
        </Row>
      </Container>
      <h3>How you rate this item</h3>
      <Stars />
      <Comments />
      <AddingComment />
      <Footer />
    </>
  );
};

export default AddCommentPage;
