import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import KennDevLogo from '../assets/images/KennDevlogo.webp'
import { Typography } from '@material-tailwind/react'
import GradientButton from '../components/GradientButton'
const MainContent = () => {
  return (
    <div className="mt-16">
      <LazyLoadImage
        src={KennDevLogo}
        width={350}
        className="block ml-auto mr-auto"
      />
      <div>
        <Typography
          variant="h1"
          color="white"
          className="mb-3 mt-3 uppercase font-bold"
        >
          Kenn Mark Sabalberino
        </Typography>
        <h1 className="font-black text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-light-blue-500">
          Web Developer.
        </h1>
        <Typography color="white" className="mb-3 mt-3">
          Passionate in Web Application focuses on ReactJS development.
        </Typography>
        <a href="mailto:skyhex27@gmail.com" className="inline-block">
          <GradientButton label="Message Me" />
        </a>
      </div>
    </div>
  )
}

export default MainContent
