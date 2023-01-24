import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItemsWithThunk, get_Item_Id_With_Thunk } from "../redux/actions";
import AddToCart from "./AddToCart";
import Comments from "./Comment";
import Footer from "./footer";
import Like from "./Like";
import Navbar1 from "./Navbar1";
import Stars from "./Stars";

/* const mapStateToProps = (state) => {
  return {
    itemData: state.itemsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}; */

const SingleItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClickFromRedux = useSelector((state) => state.item_Clicked);

  const addCommentPage = () => {
    navigate("/AddCommetPage");
  };

  useEffect(() => {
    // props.get_One_Item();
    dispatch(get_Item_Id_With_Thunk(itemClickFromRedux));
  }, []);
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
        <h3 className="text-danger d-flex justify-content-start">
          {itemClickFromRedux.price}
        </h3>
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
      <h4>{itemClickFromRedux.description}</h4>
      <Container>
        <Row>
          <Col>
            <Button onClick={addCommentPage}>
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
export default SingleItem;
/* export default connect(mapStateToProps, mapDispatchToProps)(SingleItem); */
