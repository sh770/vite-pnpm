import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CounterComponent = ({ onAddToTotal }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddToTotal = () => {
    onAddToTotal(count);
    setCount(count === 0);
  };

  return (
    <div>
      <h2>מונה ראשון</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br />
      <p>מונה: {count}</p>
      <br />
      <button onClick={handleAddToTotal}>הוסף לסך הכולל</button>
    </div>
  );
};

export default CounterComponent;
