import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from './Login'; 

const Navbar = ({ onLogout, userRole, isLoggedIn, onLogin }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <>
      <div className="nav w-100 fixed-top bg-dark shadow-lg">
        <nav className="navbar navbar-expand-lg navbar-dark py-2 px-4">
          
          <Link to={isLoggedIn ? "/home" : "/login"} className="navbar-brand fw-bold text-white fs-4" style={{ letterSpacing: "2px" }}>
            BLUSHIFY
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <img src="/images/menu.png" alt="Menu" height="25" style={{ filter: "brightness(0) invert(1)" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            
            {isLoggedIn ? (
              <>
                <ul className="navbar-nav mx-auto gap-3 mt-3 mt-lg-0 fw-bold">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link text-white">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link text-white">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link text-white">Shop</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/faq" className="nav-link text-white">FAQ</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orderTable" className="nav-link text-white">Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link text-white">Contact</Link>
                  </li>
                  
                  {userRole === 'ROLE_ADMIN' && (
                    <li className="nav-item">
                      <Link to="/orders" className="nav-link text-warning fw-bold">Admin Panel</Link>
                    </li>
                  )}
                </ul>

                <div className="d-flex align-items-center gap-4">
                 
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

                 
                  <div className="d-flex align-items-center gap-2 border-start ps-3" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                    <span className="text-white-50 me-2 small">
                      {userRole === 'ROLE_ADMIN' ? '👑 Admin' : '👤 User'}
                    </span>
                    <button 
                      className="btn btn-danger btn-sm px-3 fw-bold shadow-sm d-flex align-items-center gap-2"
                      onClick={handleLogoutClick}
                    >
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
    
              </>
            ) : (
              
              <div className="d-flex align-items-center gap-2 ms-auto">
                
                <button 
                  className="btn btn-primary btn-sm px-3 fw-bold shadow-sm" 
                  data-bs-toggle="modal" 
                  data-bs-target="#loginModal"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </button>

              
                <button 
                  className="btn btn-warning btn-sm px-3 fw-bold shadow-sm" 
                  data-bs-toggle="modal" 
                  data-bs-target="#signupModal"
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Register
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      <Login onLogin={onLogin} />
      <Register />
    </>
  );
};

export default Navbar;