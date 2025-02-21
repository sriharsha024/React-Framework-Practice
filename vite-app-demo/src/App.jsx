import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name=" App"
  const buttonLabel="Click"
  const imageUrl="https://placehold.co/100x50 "
  
  return (
    <div>
      <h1 className='greeting'>Hello World</h1>
      <button style={{backgroundColor:"green",color:"white"}}>
        {buttonLabel}
      </button>
      <br/>
      <button onClick={()=>alert("Button CLicked")}>
        Alert 
      </button>
      <br/>
      {24*24}
      <p className='greeting'>Hi +{name} </p>
      <img src={imageUrl}/>
    </div>
  )
}

export default App
