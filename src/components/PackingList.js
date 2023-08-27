import { Item } from "./Item";
import { useState } from "react";

export function PackingList({ items, handleDelete, handleToggle, setItems }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems = items;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'packed') {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  function handleClear() {
    setItems([]);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            key={item.id} />
        ))}
      </ul>
      <div className="action" onChange={(e) => setSortBy(e.target.value)}>
        <select value={sortBy}>
          <option value='input'> Sort By Input Order</option>
          <option value='description'> Sort By Description</option>
          <option value='packed'> Sort By Packed Status</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}
