import React from 'react'
import LocationPage from './LocationPage'
function StorePage() {
  return (
    <main className="container">
    <div className="hero hero-store-img my-4 text-center">
      
      <h1>dogz wash store</h1>
    </div>
    <section className="info">
      <div className="store-splash">
      <h2 className="logo-dark">dogz wash store</h2> 
      <p className="bold">Organic, Natural Products never tested on Animals!</p>
      </div>
      <LocationPage />
    </section>
  </main>
  )
}

export default StorePage
