import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [showValue, setShowValue] = useState("");

  function showData(e) {
    let timer = setTimeout(() => {
      setShowValue(value);
    }, 500);
    return () => clearInterval(timer);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowValue(value);
    }, 500);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <div>
      <h1>Debouncing</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)}></input>
      <p>{showValue}</p>
    </div>
  );
}

export default App;
