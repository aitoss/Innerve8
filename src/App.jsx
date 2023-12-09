import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
import Home from './Pages/home.jsx'
import Prize from './Pages/prize.jsx'
import Tracks from './Pages/tracks.jsx'
import './Components/noise.css'
import Timeline from './Pages/timeline.jsx'
import Threejs from './Components/threejs.jsx'
import Testimonial from './Pages/testimonial.jsx'
import Dates from './Pages/dates.jsx'
import Sponsor from './Pages/sponsor.jsx'
import Bannercard from './Pages/bannercard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="noise"></div>
      <Home />
      <Dates />
      <Prize  />
      <Tracks  />
      <Timeline />
      <Timeline />
      <Timeline />
      <Testimonial/>
      <Sponsor/>
      <Bannercard/>
    </>
  )
}

export default App
