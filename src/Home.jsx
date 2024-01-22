import React from 'react'
import TopBannerWaves from './components/TopBannerWaves'
import MainContent from './components/MainContent'
import Projects from './components/Projects'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      <TopBannerWaves />
      <MainContent />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
