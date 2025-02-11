import React from 'react'
import './dash.css'

const BuyerNav = () => {
  return (
    <div>
  <div className="container-fluid border-bottom d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-4 text-center py-2">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-geo-alt fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Our Office</h6>
            <span>123 Street, New York, USA</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center border-start border-end py-2">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-envelope-open fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Email Us</h6>
            <span>info@example.com</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center py-2">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase mb-1">Call Us</h6>
            <span>+012 345 6789</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
    <a href="index.html" className="navbar-brand ms-lg-5">
      <h1 className="m-0 text-uppercase text-dark">
        <i className="bi bi-shop fs-1 text-primary me-3" />
        Pet Shop
      </h1>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <a href="product.html" className="nav-item nav-link">
          Product
        </a>

        <a
          href="contact.html"
          className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
        >
          Contact <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default BuyerNav