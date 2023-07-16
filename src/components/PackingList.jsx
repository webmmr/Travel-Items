/* eslint-disable react/prop-types */
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onPackedItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
