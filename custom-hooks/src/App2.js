import { useState } from "react";

const App2 = () => {
  const [count, setCount] = useState(0);

  var handleIncrement = () => {
    setCount(count + 1);
  }

  var handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={handleIncrement}>Increase Value</button>
      <button onClick={handleDecrement}>Decrease Value</button>
    </div>
  );
};
export default App2;
