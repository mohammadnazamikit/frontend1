import { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getItemsWithThunk } from "../redux/actions";
import Item from "./item";
/*
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
};*/

const Items = (props) => {
  const dispatch = useDispatch();
  const itemsFromRedux = useSelector((state) => state.itemsData);
  const navigate = useNavigate();
  const itemPage = () => {
    navigate("/singleItem");
  };
  const [items, setItems] = useState([]);

  useEffect(() => {
    // props.get_One_Item();
    dispatch(getItemsWithThunk());

    setItems(itemsFromRedux);
    console.log("this is items :", items);
  }, []);

  return (
    <div className="d-flex ms-5" onClick={itemPage}>
      {!items && <h3>please wait to till add items</h3>}
      {items &&
        items.map((item, i) => {
          return (
            <div key={i}>
              <Item item={item} />
            </div>
          );
        })}
    </div>
  );
};

//export default connect(mapStateToProps, mapDispatchToProps)(Items);
export default Items;
