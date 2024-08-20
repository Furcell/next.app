import { useState } from "react";

export default () => {
  const [counter, setCount] = useState(0);

  const increaseCount = () => {
    setCount(counter + 1);
  };

  return <button onClick={increaseCount}>{counter}</button>;
};
