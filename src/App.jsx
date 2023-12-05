import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
import Home from './Pages/home.jsx'
import Prize from './Pages/prize.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Prize />
    </>
  )
}

export default App
