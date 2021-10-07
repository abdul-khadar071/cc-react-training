import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(localStorage.getItem("count") || 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
      <center>
    <div>
      <h3>You clicked {count } times</h3>
      <button style={{backgroundColor :"red"}}onClick={() => setCount(count + 1)}>+</button>
      <button style={{backgroundColor :"green"}}onClick={() => setCount(count - 1)}>-</button>
    </div>
    </center>
  );
}

export default Counter;