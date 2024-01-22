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
import GradientButton from './GradientButton'

const Projects = () => {
  return (
    <div className="mt-28">
      <h1>Projects</h1>

      <div className="mt-7 flex justify-center">
        <hr className="w-72" />
      </div>
      <div className="sm:flex gap-3">
        <div className="mt-14">
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
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
            </CardBody>
            <CardFooter className="pt-0">
              <a href="https://skykidguide.onrender.com/">
                <GradientButton label="Visit Site" />
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-14">
          <Card className="mt-6 w-96">
            <CardHeader
              color="blue-gray"
              className="relative h-56 flex items-center"
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
