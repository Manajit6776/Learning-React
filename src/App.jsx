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

// import Counter from './Components/State'
// import ToggleText from './Components/State'
// import Liked from './Components/State'
import User from './Components/State'



function App() {

  const hobbies=["nightride", "business", "superherro"];
  let obj = {
        firstName: "Peater", lastName: "Parker", Age: 22
    }
  
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
        <div className='border-box'><Properties name="Bruce" age="32" city="Gotham" hobbies={["nightride", "business", "superherro"]}/></div>
        <div className='border-box'><Properties age="22" city="NoWhere" obj={obj}/></div>
      </div>

      {/* useState: Event Handle */}
      <div className='border-box'>
        <h1>useState</h1>
        {/* <Counter /> */}
        {/* <ToggleText/> */}
        {/* <Liked/> */}
        <User name="User" age={20} city="NoWhere"/>
      </div>


      <Bye />
    </>
  )


}

export default App
