import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import Category from "./Category";
import LoginButton from "./Loginbutton";
import SearchButton from "./searchbar";
import SignUp_Button from "./signupbutton";

const Navbar2 = (props) => {
  return (
    <Container className="bg-secondary">
      <Row>
        <Col>
          <Category />
        </Col>
        <Col>
          <SearchButton />
        </Col>
        <Col>
          <SignUp_Button />
        </Col>
        <Col>
          <LoginButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar2;
