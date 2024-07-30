import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [reversedNumber, setReversedNumber] = useState(null)

  function handleInput(e) {
    const {value} = e.target;
    
    if (/^\d*$/.test(value)) {
      setInput(value)
    }
  }

  function handleSubmit() {
    const number = parseInt(input, 10);
    if (!isNaN(number)) {
      const reversed = parseInt(input.split("").reverse().join(""), 10);
      const difference = Math.abs(number - reversed);
      setResult(difference);
      setReversedNumber(reversed)
    }
  }
  
  return (
    <div className="App">
      <div>
        Number: <input value={input} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result</div>
      <div>
           Reversed: {result !== null ? result : 0}
      </div>
      <div>Difference: {reversedNumber !== null ? reversedNumber : 0}</div>
    </div>
  );
}
