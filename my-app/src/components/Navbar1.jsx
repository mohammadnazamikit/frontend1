import { Container, NavbarBrand, Row } from "react-bootstrap";

const Navbar1 = (props) => {
  return (
    <Container fluid>
      <Row>
        <NavbarBrand className="fw-bold fs-1 d-flex justify-content-center">
          help colleagues buy cheaper
        </NavbarBrand>
      </Row>
    </Container>
  );
};
export default Navbar1;
