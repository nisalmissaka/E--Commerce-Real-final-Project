import React from 'react';
import SignUpModal from '../pages/SignUpModel';

const Navbar = () => {
  return (
    <>
      <div className="nav w-100 fixed-top bg-dark shadow-lg">
        <nav className="navbar navbar-expand-lg navbar-dark py-2 px-4">
          
          {/* 1. Logo */}
          <a href="#" className="navbar-brand fw-bold text-white fs-4" style={{ letterSpacing: "2px" }}>
            BLUSHIFY
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <img src="/images/menu.png" alt="Menu" height="25" style={{ filter: "brightness(0) invert(1)" }} />
          </button>

          {/* 2. Collapsible Wrapper */}
          <div className="collapse navbar-collapse" id="navbarNav">
            
            {/* 3. Navigation Links */}
            <ul className="navbar-nav mx-auto gap-3 mt-3 mt-lg-0 fw-bold">
              <li className="nav-item"><a href="/home" className="nav-link text-white">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link text-white">About</a></li>
              <li className="nav-item"><a href="/shop" className="nav-link text-white">Shop</a></li>
              <li className="nav-item"><a href="/faq" className="nav-link text-white">FAQ</a></li>
              <li className="nav-item"><a href="/orders" className="nav-link text-white">Orders</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link text-white">Contact</a></li>
            </ul>

            {/* 4. Right Side Content */}
            <div className="d-flex align-items-center gap-4">
              
              {/* Icons */}
              <div className="d-flex align-items-center gap-3 text-white">
                <i className="bi bi-search fs-5" style={{ cursor: 'pointer' }}></i>
                <div className="position-relative">
                  <i className="bi bi-heart fs-5"></i>
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1 rounded-circle"></span>
                </div>
                <div className="position-relative">
                  <i className="bi bi-bag fs-5"></i>
                  <span className="badge bg-warning position-absolute top-0 start-100 translate-middle p-1 rounded-circle"></span>
                </div>
              </div>

              {/* Auth Buttons */}
              <div className="d-flex align-items-center gap-2 border-start ps-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <button className="btn btn-primary btn-sm px-3 fw-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>

                <button className="btn btn-warning btn-sm px-3 fw-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#signupModal">
                  Register
                </button>

                <button className="btn btn-danger btn-sm px-3 fw-bold shadow-sm d-flex align-items-center gap-2">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Logout</span>
                </button>
              </div>

            </div>
          </div>
        </nav>
      </div>

      <SignUpModal />
    </>
  );
};

export default Navbar;