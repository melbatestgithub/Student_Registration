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
    grade: '',
    age: '',
  });

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
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
      grade: '',
      parentName: '',
      parentPhone: '',
    });
  };

  return (
    <div>
    <Navbar/>
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold text-cyan-600 mb-6'>Register Student</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Full Name</label>
          <input 
            type='text' 
            name='firstName' 
            value={studentData.fullName} 
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
            name='phone' 
            value={studentData.phone} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Date of Birth</label>
          <input 
            type='date' 
            name='dateOfBirth' 
            value={studentData.dateOfBirth} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Address</label>
          <textarea 
            name='address' 
            value={studentData.address} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded' 
            rows='3'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Grade</label>
          <select 
            name='grade' 
            value={studentData.grade} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          >
            <option value=''>Select Grade</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Parent/Guardian Name</label>
          <input 
            type='text' 
            name='parentName' 
            value={studentData.parentName} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 font-semibold'>Parent/Guardian Phone Number</label>
          <input 
            type='tel' 
            name='parentPhone' 
            value={studentData.parentPhone} 
            onChange={handleChange} 
            required 
            className='w-full p-2 border rounded'
          />
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
