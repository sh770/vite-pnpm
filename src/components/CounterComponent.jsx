import { useState, useContext } from 'react';
import { TotalContext } from './context';


const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const totalContext = useContext(TotalContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleAddToTotal = () => {
    totalContext.addToTotal(count);
    setCount( 0 );
  };

  return (
    <div>
      <h2>רכיב מונה</h2>
      <p>מונה: {count}</p>
      <button onClick={handleIncrement}>הוסף אחד</button>
      <button onClick={handleDecrement}>החסר אחד</button>
      <br />
      <button onClick={handleAddToTotal}>שלח לסיכום</button>
    </div>
  );
};

export default CounterComponent;
