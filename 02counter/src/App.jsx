import { useState } from 'react'
import './App.css'

function App() {
  // states in react
  const [counter, setCounter] = useState(15); // parameter is given to useState() to declare initial value of counter.
  // 1. this will always return new state every time so using "let" is optional
  // 2. counter is a variable in the array whereas setCounter is a function

  // let counter = 15;
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1); // this actually taking the previous values of the counter to update the new one.
    // setCounter((prevCounter) => prevCounter);
    // setCounter((prevCounter) => prevCounter); // so if this are repeated then changes can be seen and there will be different value which is going to display
    
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); // even if this lines are repeated due to batching concept it call only one function and works normally.
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  // but doing this will only show the changes happening in console but the ui gets stuck at the same number. Here react works fine.
  return (
    <>
      <h1>React with Srijon</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
