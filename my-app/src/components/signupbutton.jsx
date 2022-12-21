import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp_Button = (props) => {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/signup");
  };
  return (
    <>
      <Button className="text-primary bg-secondary " onClick={signUp}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUp_Button;
