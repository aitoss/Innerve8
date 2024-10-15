import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
import Home from './Pages/home.jsx'
import Prize from './Pages/prize.jsx'
import Tracks from './Pages/tracks.jsx'
import './Components/noise.css'
import Threejs from './Components/threejs.jsx'
import Testimonial from './Pages/testimonial.jsx'
import Dates from './Pages/dates.jsx'
import Footer from './Pages/footer.jsx'
import Sponsor from './Pages/sponsor.jsx'
import Bannercard from './Pages/bannercard.jsx'
import Problems from './Pages/problems.jsx'
import Faqs from './Pages/faqs.jsx'
import TestimonialMob from './Pages/testimonialMobile.jsx'
import Teams from './Pages/teams.jsx'
import GoTop from './Components/GoTop.jsx'
import Timeline from './Pages/Timeline.jsx'
import ProblemStatement from './Pages/problemStatement.jsx'

function App() {


  return (
    <>
      <div className="noise max-w-[1400px]"></div>
      <Home />
      <GoTop />
      <Dates />
      <Prize id="prizes" />
      {/* <ProblemStatement /> */}
      <Tracks />
      {/* <Problems /> */}
      {/* <Timeline />
      <Timeline />
      <Timeline /> */}
      <Timeline/>
      <Sponsor />
      <Testimonial />
      <TestimonialMob />
      <Faqs />
      <Bannercard />
      <Footer />
      {/* <Teams/> */}

    </>
  )
}

export default App
