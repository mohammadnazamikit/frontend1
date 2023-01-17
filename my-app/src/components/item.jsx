import { Card, ListGroup } from "react-bootstrap";

const Item = (props) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title className="text-danger">{props.item.price}</Card.Title>
          <Card.Text>{props.item.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
