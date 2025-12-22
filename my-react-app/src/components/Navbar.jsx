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
      {/*Sign-up Modal*/}
      <div className="model fade" id='signupModal' tabIndex='-1' aria-labelledby='signupModalLabel' aria-hidden='true'>
        <div className="model-dialog model-dialog-centered">
          <div className="model-content p-4">
            <div className="model-header border-0">
              <h5 className="modal-title fw-bold" id='signupModalLabel'>Sigh Up</h5>
              <button type='button' className='btn-close' data-bs-dismis='modal' aria-label='Close'></button>
            </div>
          </div>
        </div>
      </div>
      <div className='model-body'>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type='text' name="form-control" placeholder='Enter Your Name' required/>
          </div>
           <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type='email' name="form-control" placeholder='Enter Email Address' required/>
          </div>
           <div className="mb-3">
            <label className="form-label">Password</label>
            <input type='password' name="form-control" placeholder='Enter Password' required/>
          </div>
          <p className="text-muted">By sighing up,you agree to our <a href='#' className='text-success text-decoration-none'>Terms</a> & <a href='#' className='text-success text-decoration-none'>Privacy Policy</a>
          </p>
          <button type='button' className='btn btn-dark w-100'>Sigh Up</button>
        </form>
        
      </div>
    </div>
    
  );
};

export default Navbar;
