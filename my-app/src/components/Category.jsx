import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Category = () => {
  return (
    <>
      <Container>
        <Nav className="me-auto">
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </>
  );
};

export default Category;
