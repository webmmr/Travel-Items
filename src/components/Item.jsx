/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  console.log(item);
  return (
    <div>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>&times;</button>
    </div>
  );
};

export default Item;
