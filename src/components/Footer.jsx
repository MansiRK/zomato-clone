import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className="py-5">
          {/* <h2>Zomato</h2> */}
          <img src="/images/logo.png" alt="" />
    <div className="row">
      <div className="col-lg-2 col-md-2 mb-3">
      
        <h5>About Zomato</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Who We Are</li>
          <li className="nav-item mb-2">Blog</li>
          <li className="nav-item mb-2">Work With Us</li>
          <li className="nav-item mb-2">Investor Relations</li>
          <li className="nav-item mb-2">Report Fraud</li>
          <li className="nav-item mb-2">Press Kit</li>
          <li className="nav-item mb-2">Contact Us</li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-2 mb-3">
        <h5>ZOMAVERSE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Zomato</li>
          <li className="nav-item mb-2">Blinkit</li>
          <li className="nav-item mb-2">Feeding India</li>
          <li className="nav-item mb-2">Hyperpure</li>
          <li className="nav-item mb-2">Zomaland</li>
          <li className="nav-item mb-2">Weather Union</li>

        </ul>
      </div>

      <div className="col-lg-3 col-md-2 mb-3">
        <h5>FOR RESTAURANTS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Partner With Us</li>
          <li className="nav-item mb-2">Apps For You</li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-2 mb-3">
        <h5>LEARN MORE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Partner With Us</li>
          <li className="nav-item mb-2">Apps For You</li>
        </ul>
      </div>

      <div className="col-lg-2 col-md-2 mb-3">
        <h5>SOCIAL LINKS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Partner With Us</li>
          <li className="nav-item mb-2">Apps For You</li>
        </ul>
      </div>

      
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
      
    </div>
  </footer>
    </div>
  )
}

export default Footer
