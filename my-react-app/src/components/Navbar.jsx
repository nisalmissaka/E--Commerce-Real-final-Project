import React from 'react';

const Navbar = () => {
  return (
    <div className="nav w-100 fixed-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg py-3 px-4">

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mobile Logo */}
        <a href="#" className="navbar-brand mx-auto d-lg-none">
          <h2 className="m-0 fw-bold" style={{ letterSpacing: '2px' }}>
            BLUSHIFY
          </h2>
        </a>

        {/* Mobile Icons */}
        <ul className="d-lg-none d-flex align-items-center gap-3 list-unstyled mb-0">
          <li>
            <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
              <i className="bi bi-search fs-5 text-dark"></i>
            </a>
          </li>

          <li className="position-relative">
            <a href="#">
              <i className="bi bi-person fs-5 text-dark"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </a>
          </li>
        </ul>

        {/* Main Nav */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav gap-4 mx-auto">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Shop</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Store</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
