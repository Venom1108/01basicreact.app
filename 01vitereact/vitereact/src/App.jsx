import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  let [count, setcounter] = useState(2)

  const addvalue = () =>{
    setcounter(count+1)
  }
  const removevalue = () =>{
    setcounter(count-1)
  }

  return (
    <>
       <h1> chai aur code</h1>
       <h2> hello react</h2>
       
       <button onclick={addvalue}>
        
        addvalue{count}</button>
       <br/>
       <button onclick={removevalue}>removevalue{count}</button>    
    </>
  )
}

export default App
