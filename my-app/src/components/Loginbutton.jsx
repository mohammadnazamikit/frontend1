import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginButton = (props) => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/signin");
  };
  return (
    <>
      <Button className="text-primary bg-secondary" onClick={login}>
        sign in
      </Button>
    </>
  );
};

export default LoginButton;
