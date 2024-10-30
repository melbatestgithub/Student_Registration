import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Example icons from react-icons

const Footer = () => {
  return (
    <footer className='bg-cyan-600 text-white py-8'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Links Section */}
          <div className='mb-6'>
            <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
            <ul className='space-y-2'>
              <li><a href="/register" className='hover:underline'>Register Student</a></li>
              <li><a href="/students" className='hover:underline'>Get Students Detail</a></li>
              <li><a href="/profile" className='hover:underline'>Profile</a></li>
              <li><a href="/about" className='hover:underline'>About Us</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className='mb-6'>
            <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
            <p>Email: <a href="mailto:support@studentportal.com" className='hover:underline'>support@studentportal.com</a></p>
            <p>Phone: <a href="tel:+123456789" className='hover:underline'>+1 (234) 567-89</a></p>
          </div>

          {/* Social Media Section */}
          <div className='mb-6'>
            <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-2xl hover:text-gray-200' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-2xl hover:text-gray-200' />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-2xl hover:text-gray-200' />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-2xl hover:text-gray-200' />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='text-center border-t border-gray-200 pt-4 mt-6'>
          <p>&copy; {new Date().getFullYear()} Student Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
