import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="flex flex-wrap justify-center w-screen h-screen" style={{backgroundColor: color}}>
      <div className="flex justify-center mx-8 w-1/2 h-12 rounded py-2 bg-white ">
        <button className='px-4 py-2 text-white rounded-lg' style={{backgroundColor: "red"}}
          onClick={() => {setColor('red')}}
        >Red</button>
        <button className='px-4 py-2 text-white rounded-lg' style={{backgroundColor: "green"}}
          onClick={() => {setColor('green')}}
        >Green</button>
        <button className='px-4 py-2 text-white rounded-lg' style={{backgroundColor: "blue"}}
          onClick={() => {setColor('blue')}}
        >Blue</button>
        <button className='px-4 py-2 text-white rounded-lg' style={{backgroundColor: "gray"}}
          onClick={() => {setColor('gray')}}
        >Gray</button>
      </div>
    </div>
  )
}

export default App
