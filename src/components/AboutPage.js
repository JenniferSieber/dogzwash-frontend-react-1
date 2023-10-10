import React from 'react'
import employees from '../data/employees.json'


function AboutPage() {
 
  return (
    <main className="container">
      <p><span className="logo-dark fs-2">dogz wash</span> is the local hang out for our furbabies. We facilitate doggie daycare, training, all grooming needs and longterm kennel care.</p>
      
      <p>We specialize in connecting to your pooch and providing them with a safe, fun, loving environment with humans who are empathetic, kind and skilled. Our services are expansive and we can always answer questions. just ask!</p>
      <p>Don't forget to stop by the <span className="logo-dark fs-5">dogz wash store</span> </p>
     
      <h4>Some of our Experienced Dog Friends</h4>
      <p>We are the energy, time, and love behind <span className="logo-dark fs-6">dogz wash</span>. We hope you enjoy our dog paradise as much as we do!</p>
      <div className="row">
      
      {employees.map((employee, index) => (
        <div className="col-12 col-med-6 col-lg-3 mb-4" key={employee.id}>
          <img src={employee.img} className="img-fluid custom-img-ht" alt={employee.name} />
          <h2 className="my-2">{employee.name}</h2>
          <p>{employee.bio}</p>
        </div>
      )
      )}     
      </div>
    </main>
  )
}

export default AboutPage
