import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const RegisterStudents = () => {
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phoneNumber: '',
    department: '',
    course: [''],
    age: '',
  });

  const [error,setError]=useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as API calls
    console.log('Student Data Submitted:', studentData);
    // Reset the form
    setStudentData({
    firstName: '',
    lastName:'',
    email: '',
    phoneNumber: '',
    department: '',
    course: [''],
    age: '',
    });
  };

  return (
    <div>
    <Navbar/>
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold text-cyan-600 mb-6'>Register Student</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>First Name</label>
          <input 
            type='text' 
            name='firstName' 
            value={studentData.firstName} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Last Name</label>
          <input 
            type='text' 
            name='lastName' 
            value={studentData.lastName} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Email</label>
          <input 
            type='email' 
            name='email' 
            value={studentData.email} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Phone Number</label>
          <input 
            type='tel' 
            name='phoneNumber' 
            value={studentData.phoneNumber} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Age</label>
          <input 
            type='number' 
            name='age' 
            value={studentData.age} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Department</label>
          <textarea 
            name='department' 
            value={studentData.department} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded' 
            rows='3'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Course</label>
          <select 
            name='course' 
            value={studentData.course} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          >
            <option value=''>Select Course</option>
            <option value='1'>JS</option>
            <option value='2'>Python</option>
            <option value='3'>HTML</option>
            <option value='4'>Data Structure</option>
          </select>
        </div>
        <button 
          type='submit' 
          className='w-full bg-cyan-600 text-white p-2 rounded hover:bg-cyan-500 transition duration-200'
        >
          Register Student
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default RegisterStudents;
