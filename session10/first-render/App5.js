import { useEffect, useRef, useState } from "react";
 
function App5() {

  const [count, setCount] = useState(0);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(count);
  });

  const increment=() => {
    setCount((count) => count + 1);
  }
  return (
    <center><div>
      <p>{count}</p>
      <button
        onClick={increment}
      >
       +
      </button>
     
    </div></center>
  );
}

export default App5;