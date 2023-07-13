import { useState } from "react";
import Item from "./Item";

/* eslint-disable react/no-unescaped-entities */
const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="add-form">
      <h3>What do you need for today's trip?</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
