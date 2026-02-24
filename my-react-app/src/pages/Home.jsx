import React from 'react';
import homeImg from '../assets/home.jpeg';

const Home = () => {
  return (
    <div className='container text-center mt-5 pt-5'>
      <h1 className='fw-bold'>Welcome To BLUSHIFY E-Commerce</h1>
      <img
        src={homeImg}
        alt='Home'
        className='img-fluid mt-4'
      />
    </div>
  );
};

export default Home;
