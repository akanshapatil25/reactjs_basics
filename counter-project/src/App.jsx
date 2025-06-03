import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
 //hooks help with ui syncing and sharing logic between componenets helping us to share the same date and update it by all the components 
  

  function addValue(){
    counter = counter + 1;
    setCounter(counter)
  }

  function removeValue(){
    counter = counter - 1;
    setCounter(counter);
  }

  function reset (){
    counter = 0;
    setCounter(counter);
  }

  return (
    <>
      <h1> A simple counter</h1>
      <h2> Counter value: {counter} </h2>

      <button onClick={addValue} > add value</button>
      <br/>
      <br/>
      <button onClick={removeValue}> remove value</button>
       <br/>
        <br/>
      <button onClick={reset}> reset </button>
    </>
  )
}

export default App
