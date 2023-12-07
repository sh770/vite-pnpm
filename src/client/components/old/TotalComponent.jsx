import { useState } from 'react';
import CounterComponent from './CounterComponent';

const TotalComponent = () => {
  const [total, setTotal] = useState(0);
  

  const addToTotal = (count) => {
    setTotal(total + count);
  };

  return (
    <div>
        <CounterComponent onAddToTotal={addToTotal} />
      <h2>חשבון כולל</h2>
      <p>סך הכל: {total}</p>
      
    </div>
  );
};

export default TotalComponent;
