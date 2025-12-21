import React from 'react';

const Navbar = () => {
  return (
    <div className="nav w-100 fixed-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-4">

        {/* Logo Left */}
        <a href="#" className="navbar-brand fw-bold" style={{ letterSpacing: "2px" }}>
          BLUSHIFY
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links Right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
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
