import { useNavigate } from "react-router-dom";
import Item from "./item";

const Items = () => {
  const navigate = useNavigate();
  const itemPage = () => {
    navigate("/singleItem");
  };
  const items = [1, 2];
  return (
    <div className="d-flex ms-5" onClick={itemPage}>
      {items.map((item, i) => {
        return <Item price={item} key={i} />;
      })}
    </div>
  );
};

export default Items;
