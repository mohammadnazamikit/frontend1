import Item from "./item";

const Items = () => {
  const items = [1, 1];
  return (
    <div className="d-flex ms-5">
      {items.map((item) => {
        return <Item price={item} />;
      })}
    </div>
  );
};

export default Items;
