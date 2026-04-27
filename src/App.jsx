import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Hello from "./Components/Hello"
import Bye from "./Components/Bye"
import FunEve from "./Components/Event"
import PrintArray from "./Components/Array"
import PrintObject from "./Components/Object"
import PrintArrayOfObject from './Components/ArrayOfObject'
import ConditionalRendering from './Components/ConditionalRendering'
import Properties from './Components/Props'

function App() {

  if(true)
  {

  }

  const hobbies=["nightride", "business", "superherro"];
  
  return(
    <>
      <h1>App Component</h1>
      <Hello />
      <img className='hero' src={reactLogo} alt="" />
      <br />
      
      <FunEve />

      <PrintArray />
      <PrintObject />
      <PrintArrayOfObject />

      <ConditionalRendering />

      {/* Props */}
      <div className='Properties'>
        <div><Properties name="Bruce" age="32" city="Gotham" hobbies={["nightride", "business", "superherro"]}/></div>
        <div><Properties age="22" city="NoWhere"/></div>
      </div>

      <Bye />
    </>
  )


}

export default App
