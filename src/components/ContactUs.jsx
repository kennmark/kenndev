import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import screen from '../assets/images/og-image.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ContactUs = () => {
  const emailRef = useRef(HTMLInputElement)
  const nameRef = useRef(HTMLInputElement)
  const messageRef = useRef(HTMLInputElement)
  const [loading, setLoading] = useState(false)

  useEffect(() => emailjs.init('L_hK3D4hFHHaDXF_p'), [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const serviceId = 'service_wu3dw12'
    const templateId = 'template_qt5qcm8'
    try {
      setLoading(true)
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
      })
      alert('email successfully sent!')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="background pl-6 pr-6">
      {/* <LazyLoadImage src={screen}/> */}
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Message Me</span>
              </div>
              <div className="app-contact">CONTACT INFO : +63968 856 7690</div>
            </div>
            <form className="screen-body-item" onSubmit={handleSubmit}>
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    ref={nameRef}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    ref={emailRef}
                  />
                </div>
                {/* <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div> */}
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    ref={messageRef}
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" disabled={loading}>
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
