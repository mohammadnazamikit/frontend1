import { Card, ListGroup } from "react-bootstrap";

const Item = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title className="text-danger">Price</Card.Title>
          <Card.Text>description of product</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
