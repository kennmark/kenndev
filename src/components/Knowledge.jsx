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
import MONGODB from '../assets/images/icons/mongodb.png'
import TYPESCRIPT from '../assets/images/icons/typescript.png'
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
    label: 'react',
    imageUrl: TYPESCRIPT,
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
  {
    label: 'mongodb',
    imageUrl: MONGODB,
  },
]

const Knowledge = () => {
  return (
    <div className="mt-28 pl-8 pr-8">
      <h1>Knowledge</h1>

      <div className="mt-7 flex justify-center">
        <hr className="w-72" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 bg-light-blue-500/50 p-5 mt-7 rounded-3xl border-cyan-200 border-solid border-4">
        {techList.map((tech, index) => {
          return (
            <LazyLoadImage
              alt={tech.label}
              className="h-full justify-end"
              src={tech.imageUrl}
              key={index}
              width={80}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Knowledge
