import React from 'react'
import TopBannerWaves from './components/TopBannerWaves'
import MainContent from './components/MainContent'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Knowledge from './components/Knowledge'
import ContactUs from './components/ContactUs'
import Certificate from './components/Certificate'

const Home = () => {
  return (
    <div>
      <TopBannerWaves />
      <MainContent />
      <Knowledge />
      <Projects />
      <Certificate />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
