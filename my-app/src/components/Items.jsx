import { useState } from "react";
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
    get_One_Item: () => {
      dispatch(getItemsWithThunk());
    },
  };
};

const Items = (props) => {
  const navigate = useNavigate();
  const itemPage = () => {
    navigate("/singleItem");
  };
  const [items, setItems] = useState(null);

  useEffect(() => {
    props.get_One_Item();
    setItems(props.itemsData);
  }, []);

  return (
    <div className="d-flex ms-5" onClick={itemPage}>
      {items &&
        items.map((item, i) => {
          return (
            <div key={i} onClick={() => props.get_One_Item()}>
              <Item item={item} />
            </div>
          );
        })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
