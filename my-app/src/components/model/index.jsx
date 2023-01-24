import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Popup_Modal = (props) => {
  console.log("this is inside the popup modal");
  return (
    <>
      <Modal show={props.show} onHide={props.handle_Show}>
        <Modal.Body>please agree to terms and conditions</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" /* onClick={handleCheck(false)} */>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup_Modal;
