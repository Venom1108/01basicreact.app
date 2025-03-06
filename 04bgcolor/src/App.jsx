import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {{
  const [color, setColor] = useState(" olive")

  return<>
  <div className='w-full h-screen duration-200'
   style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-0 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>
         <button
         onClick={()=>setColor('red')} 
         className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "red"}}>red
        </button>
        <button
         onClick={()=>setColor('blue')} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "blue"}}>blue
        </button>
        <button         
         onClick={()=>setColor('green')} 

        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "green"}}>green
        </button>
        <button          onClick={()=>setColor('yellow')} 

        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "yellow"}}>yellow
        </button>
        <button          onClick={()=>setColor('orange')} 
 
         className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "orange"}}>orange
        </button>
        
        
        
        </div> 



    </div>


   
  </div>

  

  </>
  
}
}

export default App
