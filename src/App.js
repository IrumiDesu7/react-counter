import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className='counterContainer'>
      <div className='counter'>{count}</div>
      <div className='buttonContainer'>
        <button onClick={decrease} className='decrease'>
          -
        </button>
        <button onClick={reset} className='reset'>
          Reset
        </button>
        <button onClick={increase} className='increase'>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
