import { createContext, useState } from 'react';

const TotalContext = createContext();

// eslint-disable-next-line react/prop-types
const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  const addToTotal = (amount) => {
    setTotal(total + amount);
  };

  return (
    <TotalContext.Provider value={{ total, addToTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export { TotalContext, TotalProvider };
