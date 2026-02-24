import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const response = await axios.post('http://localhost:8080/api/auth/login', {
      username: username,
      email: email
    });

    if (response.data && response.data.role) {
      closeModal();

     
      if (typeof onLogin === "function") {
        onLogin(response.data.role);
      }

      setUsername('');
      setEmail('');
    } else {
      setError('Invalid response from server');
    }

  } catch (error) {
    setError('Login failed');
  } finally {
    setLoading(false);
  }
};

    return (
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0 rounded-4 shadow-lg">
                    <div className="modal-body p-4 p-md-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold mb-0">Sign Up</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {status.msg && (
                            <div className={`alert alert-${status.type} py-2 text-center small`}>
                                {status.msg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 text-start">
                                <label className="form-label fw-bold small">Username</label>
                                <input type="text" name="username" className="form-control" placeholder="Enter Username" onChange={handleChange} required />
                            </div>
                            <div className="mb-4 text-start">
                                <label className="form-label fw-bold small">Email</label>
                                <input type="text" name="email" className="form-control" placeholder="enter email" onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-dark w-100 py-2 fw-bold rounded-3 mb-3">Register Now</button>
                        </form>
                        <div className="text-center">
                            <p className="small text-muted mb-0">Already have an account? <span className="text-success fw-bold" style={{cursor: 'pointer'}} data-bs-dismiss="modal" onClick={() => navigate('/login')}>Sign in</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;