import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import DescreaseCounter from './components/DescreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import IncreaseCounter from './components/IncreaseCounter';

function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
      <DescreaseCounter></DescreaseCounter>

    </div>
  );
}

export default App;
