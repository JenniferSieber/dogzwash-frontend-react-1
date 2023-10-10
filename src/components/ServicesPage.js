import React from 'react'
import services from '../data/services.json'

function ServicesPage() {

  return (
    <main className="container">
      <h1 className="my-4">Our Services</h1>
      {services.map((service, index) => (
        <div key={service.id} className="col-12 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">

              <div className="left card-side">
                <h2 className="card-title">{service.name}</h2>
                <p className="card-text">{service.desc}</p>
                <p className="card-text bold">${service.price}</p>
                <button>order</button>
              </div>
              <div className="right card-side">
              <img src={service.img} className="img-fluid custom-img-height" alt={service.name} />
              </div>
            </div>
          </div>
        </div>
      )
      )}
      
    </main>
  )
}

export default ServicesPage
