import React from 'react'
import './dash.css'
import BuyerNav from './BuyerNav'
import BuyerFooter from './BuyerFooter'

const BuyerDash = () => {
  return (
    <div>
  <BuyerNav />



  <div className="container-fluid py-5">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100 rounded"
              src="/about.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">About Us</h6>
            <h1 className="display-5 text-uppercase mb-0">
              We Keep Your Pets Happy All Time
            </h1>
          </div>
          <h4 className="text-body mb-4">
            Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no
            labore lorem sit clita duo justo magna dolore
          </h4>
          <div className="bg-light p-4">
            <ul
              className="nav nav-pills justify-content-between mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item w-50" role="presentation">
                <button
                  className="nav-link text-uppercase w-100 active"
                  id="pills-1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-1"
                  type="button"
                  role="tab"
                  aria-controls="pills-1"
                  aria-selected="true"
                >
                  Our Mission
                </button>
              </li>
              <li className="nav-item w-50" role="presentation">
                <button
                  className="nav-link text-uppercase w-100"
                  id="pills-2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-2"
                  type="button"
                  role="tab"
                  aria-controls="pills-2"
                  aria-selected="false"
                >
                  Our Vission
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-1"
                role="tabpanel"
                aria-labelledby="pills-1-tab"
              >
                <p className="mb-0">
                  Tempor erat elitr at rebum at at clita aliquyam consetetur.
                  Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                  Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor consetetur takimata eirmod, dolores
                  takimata consetetur invidunt magna dolores aliquyam dolores
                  dolore. Amet erat amet et magna
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-2"
                role="tabpanel"
                aria-labelledby="pills-2-tab"
              >
                <p className="mb-0">
                  Tempor erat elitr at rebum at at clita aliquyam consetetur.
                  Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                  Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor consetetur takimata eirmod, dolores
                  takimata consetetur invidunt magna dolores aliquyam dolores
                  dolore. Amet erat amet et magna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-5">
    <div className="container">
      <div
        className="border-start border-5 border-primary ps-5 mb-5"
        style={{ maxWidth: 600 }}
      >
        <h6 className="text-primary text-uppercase">Services</h6>
        <h1 className="display-5 text-uppercase mb-0">
          Our Excellent Pet Care Services
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-md-6">
          <div className="service-item bg-light d-flex p-4">
            <i className="flaticon-house display-1 text-primary me-4" />
            <div>
              <h5 className="text-uppercase mb-3">Pet Boarding</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item bg-light d-flex p-4">
            <i className="flaticon-food display-1 text-primary me-4" />
            <div>
              <h5 className="text-uppercase mb-3">Pet Feeding</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item bg-light d-flex p-4">
            <i className="flaticon-grooming display-1 text-primary me-4" />
            <div>
              <h5 className="text-uppercase mb-3">Pet Grooming</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
         
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item bg-light d-flex p-4">
            <i className="flaticon-cat display-1 text-primary me-4" />
            <div>
              <h5 className="text-uppercase mb-3">Pet Training</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
         
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item bg-light d-flex p-4">
            <i className="flaticon-dog display-1 text-primary me-4" />
            <div>
              <h5 className="text-uppercase mb-3">Pet Exercise</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
          
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item bg-light d-flex p-4">
            <i className="flaticon-vaccine display-1 text-primary me-4" />
            <div>
              <h5 className="text-uppercase mb-3">Pet Treatment</h5>
              <p>
                Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                elitr dolor amet sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="container-fluid py-5">
    <div className="container">
      <div
        className="border-start border-5 border-primary ps-5 mb-5"
        style={{ maxWidth: 600 }}
      >
        <h6 className="text-primary text-uppercase">Latest Blog</h6>
        <h1 className="display-5 text-uppercase mb-0">
          Latest Articles From Our Blog Post
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="blog-item">
            <div className="row g-0 bg-light overflow-hidden">
              <div className="col-12 col-sm-5 h-100">
                <img
                  className="img-fluid h-100"
                  src="/blog-1.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                    <small>
                      <i className="bi bi-calendar-date me-2" />
                      01 Jan, 2045
                    </small>
                  </div>
                  <h5 className="text-uppercase mb-3">
                    Dolor sit magna rebum clita rebum dolor
                  </h5>
                  <p>
                    Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                    stet tempor eos dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog-item">
            <div className="row g-0 bg-light overflow-hidden">
              <div className="col-12 col-sm-5 h-100">
                <img
                  className="img-fluid h-100"
                  src="/blog-2.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                    <small>
                      <i className="bi bi-calendar-date me-2" />
                      01 Jan, 2045
                    </small>
                  </div>
                  <h5 className="text-uppercase mb-3">
                    Dolor sit magna rebum clita rebum dolor
                  </h5>
                  <p>
                    Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                    stet tempor eos dolor
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<BuyerFooter />
</div>

  )
}

export default BuyerDash