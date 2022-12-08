import { Container, NavbarBrand, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
