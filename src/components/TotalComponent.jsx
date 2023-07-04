import { useContext } from 'react';
import { TotalContext } from './context.jsx';


const TotalComponent = () => {
  const { total } = useContext(TotalContext);

  return (
    <div>
      <h2>מסכם</h2>
      <p>סך הכל: {total}</p>
    </div>
  );
};

export default TotalComponent;
