/* eslint-disable react/prop-types */
const Item = ({ item, onDeleteItem, onPackedItem }) => {
  return (
    <div>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackedItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="btn" onClick={() => onDeleteItem(item.id)}>
        &times;
      </button>
    </div>
  );
};

export default Item;
