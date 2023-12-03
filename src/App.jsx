import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
    </>
  )
}

export default App
