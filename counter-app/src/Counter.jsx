import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    
    if (count > 0) {
      setCount(count - 1);
    }else{
        alert("Negative decrement is Not Allowed!");
    }
  }

  return (
    <div className="counter-container">
      <h1 className="SC">SIMPLE COUNTER</h1>

      <h2>Counter</h2>

      <div className="counter-value">
        Current Count: {count}
      </div>

      <button onClick={increment}>
        Increment +
      </button>

      <button onClick={decrement}>
        Decrement -
      </button>
    </div>
  );
}

export default Counter;