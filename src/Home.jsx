import React from 'react'
import TopBannerWaves from './components/TopBannerWaves'
import MainContent from './components/MainContent'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Knowledge from './components/Knowledge'
import ContactUs from './components/ContactUs'

const Home = () => {
  return (
    <div>
      <TopBannerWaves />
      <MainContent />
      <Knowledge />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
