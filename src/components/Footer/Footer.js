import React from 'react'
import './Footer.css'
import {FaTwitter,FaYoutube,FaInstagram,FaFacebook, FaVoicemail} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-info sticky-bottom'>
      <div className="d-flex justify-content-between pt-4 mt-4 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
              <li className="ms-3">
                  <a to="#" className="link-light">
                      <FaFacebook/><i className="fa fa-facebook fa-2x"></i>
                  </a>
              </li>
              <li className="ms-3">
                  <a to="#" className="link-light">
                      <FaInstagram/>
                  </a>
              </li>
              <li className="ms-3">
                  <a to="#" className="link-light">
                      <FaTwitter/>
                  </a>
              </li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer