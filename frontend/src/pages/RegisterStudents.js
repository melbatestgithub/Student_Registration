import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { addStudentRequest } from '../redux/Action';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const RegisterStudents = () => {
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: '',
    course: [], 
    age: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) error = "First name is required.";
        break;
      case 'lastName':
        if (!value.trim()) error = "Last name is required.";
        break;
      case 'email':
        if (!value) {
          error = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Email is not valid.";
        }
        break;
      case 'phoneNumber':
        if (!value) {
          error = "Phone number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Phone number should be 10 digits.";
        }
        break;
      case 'age':
        if (!value) {
          error = "Age is required.";
        } else if (isNaN(value) || value < 18 || value > 60) {
          error = "Age must be between 18 and 60.";
        }
        break;
      case 'department':
        if (!value.trim()) error = "Department is required.";
        break;
      case 'course':
        if (value.length === 0) error = "Please select at least one course.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };


  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setStudentData((prevData) => {
      const updatedCourses = checked
        ? [...prevData.course, value]
        : prevData.course.filter((course) => course !== value);

      validateField('course', updatedCourses); 
      return { ...prevData, course: updatedCourses };
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'course') {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setStudentData((prevData) => ({ ...prevData, [name]: selectedOptions }));
      validateField(name, selectedOptions);  
    } else {
      setStudentData({ ...studentData, [name]: value });
      validateField(name, value);  
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid = Object.values(errors).every((error) => error === '') &&
                        Object.values(studentData).every((field) => {
                          if (field === studentData.course) return field.length > 0; 
                          return field !== '';
                        });

    if (formIsValid) {
      setLoading(true); 
      try {
        await dispatch(addStudentRequest(studentData)); 
        toast.success("Student registered successfully!"); 
        setStudentData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          department: '',
          course: [], 
          age: '',
        });
        setErrors({});
      } catch (error) {
        toast.error("Failed to register student. Please try again."); 
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fill out all fields correctly."); 
    }
  };

  return (
    <div>
      <Navbar />
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
              className='w-full p-2 border rounded' 
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className='mb-4'>
            <label className='block mb-1 font-semibold'>Last Name</label>
            <input 
              type='text' 
              name='lastName' 
              value={studentData.lastName} 
              onChange={handleChange} 
              className='w-full p-2 border rounded' 
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          <div className='mb-4'>
            <label className='block mb-1 font-semibold'>Email</label>
            <input 
              type='email' 
              name='email' 
              value={studentData.email} 
              onChange={handleChange} 
              className='w-full p-2 border rounded' 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className='mb-4'>
            <label className='block mb-1 font-semibold'>Phone Number</label>
            <input 
              type='text' 
              name='phoneNumber' 
              value={studentData.phoneNumber} 
              onChange={handleChange} 
              className='w-full p-2 border rounded' 
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          <div className='mb-4'>
            <label className='block mb-1 font-semibold'>Age</label>
            <input 
              type='number' 
              name='age' 
              value={studentData.age} 
              onChange={handleChange} 
              className='w-full p-2 border rounded' 
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>

          <div className='mb-4'>
            <label className='block mb-1 font-semibold'>Department</label>
            <input 
              type='text' 
              name='department' 
              value={studentData.department} 
              onChange={handleChange} 
              className='w-full p-2 border rounded' 
            />
            {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
          </div>

          <div className='mb-4'>
            <label className='block mb-1 font-semibold'>Course</label>
            <div className='flex flex-wrap'>
              {['JS', 'Python', 'HTML', 'Data Structure'].map((course) => (
                <label key={course} className="mr-4">
                  <input 
                    type="checkbox"
                    name="course"
                    value={course}
                    checked={studentData.course.includes(course)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {course}
                </label>
              ))}
            </div>
            {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
          </div>
          <button 
            type='submit' 
            className={`w-full bg-cyan-600 text-white p-2 rounded hover:bg-cyan-500 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} 
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0015.464 4.464l-1.414-1.414A6 6 0 114 12z" />
                </svg>
                Loading...
              </span>
            ) : (
              "Register Student"
            )}
          </button>
        </form>
      </div>
     
      <ToastContainer /> 
    </div>
  );
}

export default RegisterStudents;
