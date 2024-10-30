import React from 'react';

const Main = () => {
  return (
    <div className='max-w-7xl mx-auto p-6'>
     
      <header className='text-center mb-10'>
        <h1 className='text-4xl font-bold text-cyan-600'>Welcome to the Student Portal</h1>
        <p className='text-lg text-gray-700 mt-2'>
          Your one-stop solution for managing student information and resources.
        </p>
      </header>

     
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
          <h2 className='text-xl font-semibold text-cyan-600'>Register Students</h2>
          <p className='text-gray-600 mt-2'>
            Easily register new students and manage their information in a user-friendly interface.
          </p>
        </div>
        <div className='p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
          <h2 className='text-xl font-semibold text-cyan-600'>View Student Details</h2>
          <p className='text-gray-600 mt-2'>
            Access detailed information about each student, including grades and attendance records.
          </p>
        </div>
        <div className='p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300'>
          <h2 className='text-xl font-semibold text-cyan-600'>Manage Profiles</h2>
          <p className='text-gray-600 mt-2'>
            Update and manage student profiles efficiently, ensuring all information is up-to-date.
          </p>
        </div>
      </section>

    
      <div className='text-center mt-10'>
        <h2 className='text-2xl font-bold text-cyan-600'>Ready to Get Started?</h2>
        <p className='text-gray-600 mt-2'>
          Join us today and make student management easier and more effective.
        </p>
        <button className='mt-4 bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-500 transition duration-200'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Main;
