import React, { useState } from 'react';
//import Count from './component/Count';
//import Food from './component/Food';
import Header from './home/Header';
//import Login from './component/Login';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header val={count} />
    <button onClick={() => setCount(count + 1)}>increment</button>
    <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  )
}

export default App;
