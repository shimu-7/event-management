import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(()=>{
    fetch("events.json")
    .then(res=>res.json())
    .then(data=>setCount(data));
  },[])

  return (
    <>
     
      <h1>Vite + React</h1>
      {
        count.map(event => <img key={event.name} src={event.image}></img>)
      }
      
    </>
  )
}

export default App
