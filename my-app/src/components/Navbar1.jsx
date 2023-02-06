import { Container, NavbarBrand, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Navbar1 = (props) => {
  const Email_Redux = useSelector((state) => state.email);

  return (
    <Container fluid>
      <Row>
        <NavbarBrand className="fw-bold fs-1 d-flex justify-content-center">
          {!Email_Redux && "help colleagues buy cheaper"}
          {Email_Redux && `Hi:  ${Email_Redux}`}
        </NavbarBrand>
      </Row>
    </Container>
  );
};
export default Navbar1;
