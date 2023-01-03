import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { LikingWithThunk } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    like: state.liking,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    settingLike: (data) => {
      dispatch(LikingWithThunk(data));
    },
  };
};

const Like = (props) => {
  return (
    <>
      <Button
        style={{ width: "50px" }}
        onClick={() => {
          props.settingLike();
        }}
      >
        Like
      </Button>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Like);
