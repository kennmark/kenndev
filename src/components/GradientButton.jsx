import React from 'react'
import { Button } from '@material-tailwind/react'

const GradientButton = ({ label }) => {
  return (
    <Button className="flex items-center gap-2 mt-3 rounded-2xl bg-gradient-to-r from-blue-900 to-light-blue-500 border-cyan-200 border-4">
      {label}
    </Button>
  )
}

export default GradientButton
