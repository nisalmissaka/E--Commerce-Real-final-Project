import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import OrderTable from './pages/OrderTable';
import Navbar from './components/Navbar';

const App = () => {
  
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });
  
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole');
  });

  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const role = localStorage.getItem('userRole');
      
      console.log('Auth Check - loggedIn:', loggedIn, 'role:', role);
      
      setIsLoggedIn(loggedIn);
      setUserRole(role);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (role) => {
    console.log('Login successful with role:', role);
    
    
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
    
    setIsLoggedIn(true);
    setUserRole(role);
    
    
    navigate('/home');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    
    
    localStorage.clear();
    
    setIsLoggedIn(false);
    setUserRole(null);
    
   
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  console.log('App Render - isLoggedIn:', isLoggedIn, 'userRole:', userRole);
  console.log('localStorage - isLoggedIn:', localStorage.getItem('isLoggedIn'));
  console.log('localStorage - userRole:', localStorage.getItem('userRole'));

  return (
    <>
      <Navbar onLogout={handleLogout} userRole={userRole} isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />
          } />
          
          <Route path="/register" element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Register />
          } />
          <Route path="/home" element={
            isLoggedIn ? <Home /> : <Navigate to="/login" state={{ from: '/home' }} replace />
          } />
          
          <Route path="/shop" element={
            isLoggedIn ? <Shop /> : <Navigate to="/login" state={{ from: '/shop' }} replace />
          } />
          
          <Route path="/about" element={
            isLoggedIn ? <About /> : <Navigate to="/login" state={{ from: '/about' }} replace />
          } />
          
          <Route path="/contact" element={
            isLoggedIn ? <Contact /> : <Navigate to="/login" state={{ from: '/contact' }} replace />
          } />
          
          <Route path="/faq" element={
            isLoggedIn ? <FAQ /> : <Navigate to="/login" state={{ from: '/faq' }} replace />
          } />
          
          <Route path="/orderTable" element={
            isLoggedIn ? <OrderTable /> : <Navigate to="/login" state={{ from: '/orderTable' }} replace />
          } />
          <Route 
            path="/orders" 
            element={
              isLoggedIn && userRole === 'ROLE_ADMIN' 
                ? <OrderTable /> 
                : <Navigate to={isLoggedIn ? "/home" : "/login"} replace />
            } 
          />
          <Route 
            path="/" 
            element={
              <Navigate to={isLoggedIn ? "/home" : "/login"} replace />
            } 
          />
          
          <Route 
            path="*" 
            element={
              <Navigate to={isLoggedIn ? "/home" : "/login"} replace />
            } 
          />
        </Routes>
      </div>
    </>
  );
};

export default App;