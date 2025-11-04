import React from 'react'
import { certificates } from '../assets/certificate-data'
import {
  Card,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react'

const Certificate = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className="mt-28 pl-8 pr-8">
      <h1>Certificate & Badges</h1>

      <div className="mt-7 flex justify-center">
        <hr className="w-72" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 bg-light-blue-500/50 p-5 mt-7 rounded-3xl border-cyan-200 border-solid border-4">
        {certificates.map((certificate, index) => (
          <div key={index}>
            <Card
              className="h-24 w-40 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
              onClick={handleOpen}
            >
              <img
                alt="nature"
                className="h-auto w-full"
                src={certificate.img}
              />
            </Card>
            <Dialog
              size="xs"
              open={open === index}
              onClick={() => handleOpen(index)}
            >
              <DialogHeader className="justify-between">
                <div className="flex items-center gap-3">
                  <div className="-mt-px flex flex-col">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-medium"
                    >
                      {certificate.title}
                    </Typography>
                    <Typography
                      variant="small"
                      color="black"
                      className="text-xs font-normal"
                    >
                      {certificate.subject}
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center gap-2"></div>
              </DialogHeader>
              <DialogBody>
                <img
                  alt="nature"
                  className="h-[41rem] w-full rounded-lg object-cover object-top"
                  src={certificate.img}
                />
              </DialogBody>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate
