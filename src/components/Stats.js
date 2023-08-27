export function Stats({ items }) {
  if (items.length === 0) {
    return <footer className="stats">
      <em>Start adding items to your list 🚀</em>
    </footer>;
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  if (percentage === 100) {
    return <footer className="stats">
      <em>You've got everything. You are ready to go ✈</em>
    </footer>;
  }
  return (
    <footer className="stats">
      <em>You have {numItems} items on your list, and you already packed {packedItems}({percentage}%)</em>
    </footer>
  );
}
