import React from 'react';
import './Navbar.css';

const Navbar = ({ setSearch }) => {  
  const handleSearchChange = (event) => {
    setSearch(event.target.value) 
  };

  return (
    <div>
      <div className='Navbar-contianer'>
        <h1>
          F<span>oo</span>dy Z<span>o</span>ne
        </h1>
        <div className='button-div'>
          <button className='btn1'>All</button>
          <button className='btn2'>Breakfast</button>
          <button className='btn3'>Lunch</button>
          <button className='btn4'>Dinner</button>
        </div>
        <div className='serach-box'>
        
          <input
            type="text"
            className='ipt'
            placeholder='Search Food'
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
