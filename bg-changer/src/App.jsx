import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color , setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: Color}}>
        <div className="fixed flex-wrap flex justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-pink-100 rounded-xl px-3 py-2">
             <button onClick={() => setColor("red")} className="outline-none px-4 py-2 rounded-full shadow-amber-50" style={{backgroundColor: "red"}}>Red</button>
               <button onClick={() => setColor("orange")} className="outline-none px-4 rounded-full shadow-amber-50" style={{backgroundColor: "orange"}}>Orange</button>
                 <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-full shadow-amber-50" style={{backgroundColor: "yellow"}}>Yellow</button>
                   <button onClick={() => setColor("lightgreen")} className="outline-none px-4 rounded-full shadow-amber-50" style={{backgroundColor: "lightgreen"}}>Green</button>
                     <button onClick={() => setColor("lightblue")} className="outline-none px-4 rounded-full shadow-amber-50" style={{backgroundColor: "lightblue"}}>Blue</button>
                       <button  onClick={() => setColor("indigo")} className="outline-none px-4 rounded-full shadow-amber-50" style={{backgroundColor: "indigo"}}>Indigo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
