import { useState } from "react";

const Counter = () => {
  const hand = () => {
    console.log("count",count);
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);



  return (
    <>
      <h1>היי המונה הוא: {count}</h1>
      <button onClick={hand}>תעלה</button>
    </>
  );
};

export default Counter;
