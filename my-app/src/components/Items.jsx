import Item from "./item";

const Items = () => {
  const items = [1, 2];
  return (
    <div className="d-flex ms-5">
      {items.map((item, i) => {
        return <Item price={item} key={i} />;
      })}
    </div>
  );
};

export default Items;
