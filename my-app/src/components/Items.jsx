import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItemsWithThunk } from "../redux/actions";
import Item from "./item";

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => {
      dispatch(getItemsWithThunk());
    },
  };
};

const Items = (props) => {
  const navigate = useNavigate();
  const itemPage = () => {
    navigate("/singleItem");
  };
  const items = [1, 2];
  return (
    <div className="d-flex ms-5" onClick={itemPage}>
      {items.map((item, i) => {
        return (
          <div onClick={() => props.getItems()}>
            <Item price={item} key={i} />
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
