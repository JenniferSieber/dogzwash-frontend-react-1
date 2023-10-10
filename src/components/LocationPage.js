import React from 'react'
import { Link } from 'react-router-dom'

function LocationPage() {
  return (
    <main className="container loc-container">
      <div className="card">
          <div className="card-body loc-card">
            <h5 className="card-title">Location & Operating Hours:</h5>
            <p className="card-text">123 Furry St., Dogtown, USA</p>
            <p className="card-text">
              8:00 AM to 6:00 PM - Monday - Saturday </p>
            <div>
            <Link to="#" className="text-decoration-none logo-dark">services@dogzwash.com</Link>
          </div>
            </div>
      </div>
    </main>
  )
}

export default LocationPage
