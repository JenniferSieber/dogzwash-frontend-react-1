import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
 
function Socials() {
  return (
    <main className="socials">

      <div className="logo">
        <Link className="font-weight-bold text-decoration-none fs-2 logo-color" to="/">
        <FontAwesomeIcon className="fa-icon ft-logo-icon" icon={faDog}  />dogz wash </Link>
      </div>

      <div className="social-icons">
        <div>
            <a
            href="https://instagram.com/jennifer_webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram}  className="fa-icon" />
          </a>
        </div>
      
        <div>
          <a
          href="https://twitter.com/JenWebDev"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faTwitter}  className="fa-icon" />
          </a>
        </div>
     </div>
    </main>
  )
}

export default Socials
