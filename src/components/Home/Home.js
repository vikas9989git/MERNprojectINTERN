import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Home.css'
import { AboutUs } from '../Allcomponents'
import Services from '../AboutUs/Services'
import Footer from '../Footer/Footer'
function Home() {
  let navigate=useNavigate()
  let showProducts=()=>{
    navigate('/product')
  }
  return (
    <div className='v'>
      <section id="home">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-8 mt-5">
                      <h1 className="display-4 fw-bolder mb-4 text-center text-white"> Feels the Fresh Business Perspective</h1>
                      <p className="lead text-center fs-4 mb-5 text-white">To view and explore our wide range of products, click on the <i>view products</i> button</p>
                      <div className="buttons d-flex justify-content-center mb-3">
                          <NavLink to="/product" className="btn btn-outline-light rounded-pill px-4 py-2">View Products</NavLink>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Services/>
      <AboutUs/>
    </div>
    
  )
}

export default Home