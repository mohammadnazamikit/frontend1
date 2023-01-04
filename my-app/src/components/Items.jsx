import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItemsWithThunk } from "../redux/actions";
import Item from "./item";

const mapStateToProps = (state) => {
  return {
    itemsData: state.itemsData,
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

  const items = props.itemsData;
  return (
    <div className="d-flex ms-5" onClick={itemPage}>
      {items.map((item, i) => {
        return (
          <div key={i} onClick={() => props.getItems()}>
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
