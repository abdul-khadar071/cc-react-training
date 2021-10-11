import { useEffect, useState, useRef } from "react";

function App6() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return (
    <center><div>
     
      <h3>
       current value :   {count} <br/>  previous value:{prevCount}
      </h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div></center>
  );
}

export default App6;