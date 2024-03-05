import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import Project1 from '../assets/images/project-1.webp'
import Project2 from '../assets/images/mern.png'
import REACT from '../assets/images/icons/react-logo.png'
import MATERIAL from '../assets/images/icons/materialtailwind.png'
import NODE from '../assets/images/icons/node-js.png'
import MONGODB from '../assets/images/icons/mongodb.png'
import GradientButton from './GradientButton'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Projects = () => {
  return (
    <div className="mt-28">
      <h1>Projects</h1>

      <div className="mt-7 flex justify-center">
        <hr className="w-72" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="mt-14">
          <Card className="mt-6 w-96 h-full" variant="gradient" color="blue">
            <CardHeader color="blue-gray" className="relative h-auto">
              <img src={Project1} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Skykid Guide: T&G
              </Typography>
              <Typography>
                A website made for SkyPH community. Based on a game{' '}
                <a href="https://www.thatskygame.com/">
                  Sky: Children of the Light
                </a>
                . A guide for reliving regular and seasonal spirits, winged
                light locations, map shrines and many more.
              </Typography>

              <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
                <LazyLoadImage src={REACT} width={40} className="h-full" />
                <LazyLoadImage src={MATERIAL} width={40} className="h-full" />
                <LazyLoadImage src={NODE} width={40} className="h-full" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://skykidguide.onrender.com/" target="_blank">
                <GradientButton label="Visit Site" />
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-14">
          <Card className="mt-6 w-96 h-full" variant="gradient" color="blue">
            <CardHeader color="blue-gray" className="relative h-auto">
              <img src={Project2} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                MERN Booking App
              </Typography>
              <Typography>
                MERN Booking App, with Stripe functionality and MongoDB.
              </Typography>

              <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
                <LazyLoadImage src={REACT} width={40} className="h-full" />
                <LazyLoadImage src={NODE} width={40} className="h-full" />
                <LazyLoadImage src={MONGODB} width={40} className="h-full" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <a
                href="https://mern-booking-app-x2mj.onrender.com/"
                target="_blank"
              >
                <GradientButton label="Visit Site" />
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-14">
          <Card className="mt-6 w-96 h-full">
            <CardHeader
              color="blue-gray"
              className="relative flex items-center h-auto pt-7 pb-7"
            >
              {/* <img src={Project1} alt="card-image" /> */}
              <h1>More Projects Soon...</h1>
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                <p>More Projects Soon...</p>
              </Typography>
              <p>More Projects Soon...</p>
            </CardBody>
            <CardFooter className="pt-0">
              {/* <a href="https://skykidguide.onrender.com/">
              <GradientButton label="Visit Site" />
            </a> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects
