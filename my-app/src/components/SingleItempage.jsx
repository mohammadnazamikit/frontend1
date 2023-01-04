import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";
import Comments from "./Comment";
import Footer from "./footer";
import Like from "./Like";
import Navbar1 from "./Navbar1";
import Stars from "./Stars";

const mapStateToProps = (state) => {
  return {
    itemData: state.itemsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const SingleItem = (props) => {
  const items = "ITEMS";

  const itemData = () => {};

  useEffect(() => {
    itemData();
  }, []);

  const navigate = useNavigate();
  const addcommentpage = () => {
    navigate("/AddCommetPage");
  };
  return (
    <>
      <Navbar1 />
      <Container>
        <Row>
          <Col>
            <Image
              height="40px"
              src="https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg"
            />
          </Col>
          <Col>
            <Container>
              <Row className="d-flex justify-content-end">
                <Like itemId={(e) => e.target.value} />
              </Row>
              <Row className="d-flex justify-content-end">
                <AddToCart />
              </Row>
            </Container>
          </Col>
        </Row>
        <h3 className="text-danger d-flex justify-content-start">price</h3>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex justify-content-end">
            <h3>Rating</h3>
          </Col>
          <Col className="d-flex justify-content-start">
            <Stars />
          </Col>
        </Row>
      </Container>
      <h4> full description of product</h4>
      <Container>
        <Row>
          <Col>
            <Button onClick={addcommentpage}>
              add comment or rating to this product
            </Button>
          </Col>
          <Col>
            <Button>My Cart</Button>
          </Col>
        </Row>
      </Container>
      <Comments />
      <Footer />
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
