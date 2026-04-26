import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Hello from "./Components/Hello"
import Bye from "./Components/Bye"
import FunEve from "./Components/Event"
import PrintArray from "./Components/Array"
import PrintObject from "./Components/Object"
import PrintArrayOfObject from './Components/ArrayOfObject'
import ConditionalRendering from './Components/ConditionalRendering'

function App() {

  if(true)
  {

  }
  
  return(
    <>
      <h1>App Component</h1>
      <Hello />
      {/* <img className='hero' src={reactLogo} alt="" /> */}
      
      <FunEve />
      <PrintArray />
      <PrintObject />
      <PrintArrayOfObject />

      <ConditionalRendering />

      <Bye />
    </>
  )


}

export default App
