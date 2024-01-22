import React from 'react'
import { Avatar } from '@material-tailwind/react'
import HTML from '../assets/images/icons/html5-logo.png'
import CSS from '../assets/images/icons/css-logo.png'
import PHP from '../assets/images/icons/php-logo.png'
import Bootstrap from '../assets/images/icons/bootstrap-logo.png'
import REACT from '../assets/images/icons/react-logo.png'
import NODE from '../assets/images/icons/node-js.png'
import TAILWIND from '../assets/images/icons/tailwindcss.png'
import MATERIAL from '../assets/images/icons/materialtailwind.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const techList = [
  {
    label: 'html',
    imageUrl: HTML,
  },
  {
    label: 'css',
    imageUrl: CSS,
  },
  {
    label: 'php',
    imageUrl: PHP,
  },
  {
    label: 'bootstrap',
    imageUrl: Bootstrap,
  },
  {
    label: 'react',
    imageUrl: REACT,
  },
  {
    label: 'node',
    imageUrl: NODE,
  },
  {
    label: 'tailwind',
    imageUrl: TAILWIND,
  },
  {
    label: 'material',
    imageUrl: MATERIAL,
  },
]

const Knowledge = () => {
  return (
    <div className="mt-28">
      <h1>Knowledge</h1>

      <div className="mt-7 flex justify-center">
        <hr className="w-72" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 bg-light-blue-500/50 p-5 mt-7 rounded-3xl">
        {techList.map((tech) => {
          return (
            <LazyLoadImage
              alt={tech.label}
              className="h-fit justify-end w-20 hover:motion-safe:animate-bounce"
              src={tech.imageUrl}
              key={tech.label}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Knowledge