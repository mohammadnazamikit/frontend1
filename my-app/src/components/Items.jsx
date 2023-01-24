import { useState } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getItemsWithThunk,
  get_Item_Id_With_Thunk,
  setItemClick,
} from "../redux/actions";
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

  const itemsToSend = (item) => {
    dispatch(get_Item_Id_With_Thunk(item._id));
  };

  useEffect(() => {
    // props.get_One_Item();
    dispatch(getItemsWithThunk());
  }, []);

  return (
    <div className="d-flex ms-5" onClick={itemPage}>
      {!itemsFromRedux && <h3>please wait to till add items</h3>}
      {itemsFromRedux &&
        itemsFromRedux.map((item, i) => {
          return (
            <div key={i} onClick={() => itemsToSend(item)}>
              <Item item={item} />
            </div>
          );
        })}
    </div>
  );
};

//export default connect(mapStateToProps, mapDispatchToProps)(Items);
export default Items;
