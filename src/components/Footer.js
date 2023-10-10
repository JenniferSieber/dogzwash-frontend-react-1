import React from 'react'
import { Link } from 'react-router-dom'
import Socials from './Socials'

function Footer() {
  return (
    <footer className="bg-dark text-center">
      <Socials />
      <div className="design text-light text-center fs-11">
          <Link className="text-light text-decoration-none created" to="https://jennifersieber.netlify.app/" target="_blank">  Created: © 2020 by JenWebDev - UI/UX designer</Link>
      </div>      
    </footer>
  )
}

export default Footer
