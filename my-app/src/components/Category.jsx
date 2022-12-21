import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const searchItem = () => {
    navigate("/searchresult");
  };
  return (
    <>
      <Container>
        <Nav className="text-danger">
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" onClick={searchItem}>
              book
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" onClick={searchItem}>
              spaghetti
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" onClick={searchItem}>
              milk
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4" onClick={searchItem}>
              jam
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </>
  );
};

export default Category;
