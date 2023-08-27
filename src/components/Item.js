export function Item({ item, handleDelete, handleToggle }) {
  return (
    <div>
      <li>
        <input type="checkbox" onChange={() => handleToggle(item.id)}></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </li>
    </div>
  );
}
