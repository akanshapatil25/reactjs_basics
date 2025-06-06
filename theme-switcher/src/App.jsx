import { useEffect, useState } from 'react'

import './App.css'
import { Themeprovider } from './contexts/theme'
import Themebutton from './components/Themebutton'
import Card from './components/Card'

function App() {
  const [thememode, setthememode] = useState("light")


  const lighttheme = () => {
      setthememode("light")
  }
  
  const darktheme = () => {
    setthememode("dark")
  }
 
  //actual chagne od them
  useEffect(() => {
  if (thememode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [thememode]);


  return (
    <>
  <Themeprovider value={{thememode, lighttheme, darktheme}}>  
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <Themebutton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
</Themeprovider>  
    </>
  )
}

export default App
