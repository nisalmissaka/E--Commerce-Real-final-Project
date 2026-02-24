import React, { useState } from 'react';

const Contact = () => {
 
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  

  const [focusedInput, setFocusedInput] = useState(null);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f3f4f6', 
      fontFamily: 'Arial, sans-serif'
    },
    formCard: {
      maxWidth: '400px',
      width: '90%',
      padding: '2rem',
      backgroundColor: '#4b5563', // gray-600
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    },
    title: {
      fontSize: '2rem',
      textAlign: 'center',
      color: '#db2777', // pink-600
      fontWeight: 'bold',
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    input: (isFocused) => ({
      width: '100%',
      padding: '0.8rem',
      marginBottom: '1rem',
      backgroundColor: '#1f2937', // gray-800
      border: `2px solid ${isFocused ? '#3b82f6' : '#374151'}`,
      borderRadius: '8px',
      color: 'white',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      boxSizing: 'border-box'
    }),
    button: {
      width: '100%',
      padding: '0.8rem',
      backgroundColor: '#2563eb',
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: isActive ? 'scale(0.95)' : 'scale(1)',
      boxShadow: isHovered ? '0 8px 15px rgba(37, 99, 235, 0.4)' : 'none',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h2 style={styles.title}>Contact Us</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label style={styles.label}>Your Name</label>
            <input 
              type="text" 
              placeholder="nisal"
              style={styles.input(focusedInput === 'name')}
              onFocus={() => setFocusedInput('name')}
              onBlur={() => setFocusedInput(null)}
              required 
            />
          </div>

          <div>
            <label style={styles.label}>Your Email</label>
            <input 
              type="email" 
              placeholder="nisal@gmail.com"
              style={styles.input(focusedInput === 'email')}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              required 
            />
          </div>

          <div>
            <label style={styles.label}>Your Message</label>
            <textarea 
              rows="4" 
              placeholder="type your message"
              style={{...styles.input(focusedInput === 'message'), resize: 'none'}}
              onFocus={() => setFocusedInput('message')}
              onBlur={() => setFocusedInput(null)}
              required 
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;