/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You haven't started yet. Let's Start</em>
      </footer>
    );

  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = (packedItem / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything. Let's Rumble!"
          : `You have ${numItems} items on your list, and You have already packed 
        ${packedItem} items(${percentage}%) `}
      </em>
    </footer>
  );
};

export default Stats;
