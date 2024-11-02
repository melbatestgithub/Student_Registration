import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaUsers, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky z-10 top-0 bg-gradient-to-r from-cyan-600 to-blue-500 w-full p-4 shadow-lg'>
      <div className='flex items-center justify-between'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <img 
            src="https://i.pinimg.com/564x/7b/08/78/7b0878cfd60fd0ef2af8d7527a6509e3.jpg" 
            alt="Logo"
            className='w-16 h-16 mr-2' 
          />
          <h1 className='text-white text-2xl font-bold'>Student Portal</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          <Link to="/register" className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <FaUserPlus className='mr-1' />
            Register Student
          </Link>
          <Link to="/student-detail" className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <FaUsers className='mr-1' />
            Get Students Detail
          </Link>
          <Link className='flex items-center text-white hover:text-gray-200 transition duration-200 mr-4'>
            <img 
              src="https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" 
              alt="Profile"
              className='w-10 h-10 rounded-full border border-white'
            />
            <span className='ml-2'>Profile</span>
          </Link>
          <button className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <FaSignOutAlt className='mr-1' />
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMobileMenu} className='text-white text-2xl focus:outline-none'>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col bg-gradient-to-r from-cyan-600 to-blue-500 p-4 space-y-4'>
          <Link to="/register" onClick={toggleMobileMenu} className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <FaUserPlus className='mr-1' />
            Register Student
          </Link>
          <Link to="/student-detail" onClick={toggleMobileMenu} className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <FaUsers className='mr-1' />
            Get Students Detail
          </Link>
          <Link onClick={toggleMobileMenu} className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <img 
              src="https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" 
              alt="Profile"
              className='w-10 h-10 rounded-full border border-white'
            />
            <span className='ml-2'>Profile</span>
          </Link>
          <button onClick={toggleMobileMenu} className='flex items-center text-white hover:text-gray-200 transition duration-200'>
            <FaSignOutAlt className='mr-1' />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
