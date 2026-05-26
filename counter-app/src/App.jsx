import { useState } from 'react'
// import './App.css'
import Counter from './Counter'
import './Counter.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
       <Counter></Counter> 
     </>
  )
}

export default App
