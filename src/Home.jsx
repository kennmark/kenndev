import React from 'react'
import TopBannerWaves from './components/TopBannerWaves'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import KennDevLogo from './assets/images/KennDevlogo.png'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react'

const Home = () => {
  return (
    <div>
      <TopBannerWaves />

      <Card
        color="transparent"
        shadow
        className="w-full max-w-[48rem] flex-row"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
          color="transparent"
        >
          <LazyLoadImage src={KennDevLogo} width={200} className="w-full" />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="white" className="mb-4 uppercase">
            Kenn Mark Sabalberino
          </Typography>
          <Typography color="white" className="mb-8 font-normal">
            Web Developer.
          </Typography>
          {/* <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a> */}
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
