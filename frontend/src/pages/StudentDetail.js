import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsRequest, deleteStudentRequest, updateStudentRequest } from '../redux/Action';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentDetail = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.studentData.data);
  const [form] = Form.useForm();  
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchStudentsRequest());
  }, [dispatch]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [viewingStudent, setViewingStudent] = useState(null);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);

  const handleEdit = (student) => {
    setEditingStudent(student);
    setSelectedCourses(student.course || []);
    form.setFieldsValue(student);  
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudentRequest(id));
    toast.success("User deleted successfully!");
    setTimeout(()=>{
   window.location.reload()
    },1000)
  };


  const filteredStudents = students.filter(student =>
    student.firstName?.toLowerCase().includes(searchText.toLowerCase()) ||
    student.lastName?.toLowerCase().includes(searchText.toLowerCase()) ||
    student.email?.toLowerCase().includes(searchText.toLowerCase())
  )
  const handleModalClose = () => {
    setIsModalVisible(false);
    setEditingStudent(null);
    setSelectedCourses([]);
    form.resetFields();  
  };

  const handleView = (student) => {
    setViewingStudent(student);
    setIsViewModalVisible(true);
  };

  const handleCheckboxChange = (course) => {
    setSelectedCourses(prev =>
      prev.includes(course)
        ? prev.filter(c => c !== course)
        : [...prev, course]
    );
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      const updatedStudent = {
        ...editingStudent,
        ...values,  
        course: selectedCourses,  
      };

      console.log("Dispatching update action with:", editingStudent._id, updatedStudent);
      dispatch(updateStudentRequest(editingStudent._id, updatedStudent));
      toast.success("Student updated successfully!");
      handleModalClose();
     setTimeout(()=>{
      window.location.reload()
     },5000)
    }).catch(info => {
      console.log('Validation Failed:', info);
    });
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      width: 150,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      width: 150,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 250,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: 150,
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
      width: 220,
      render: (course) => course.join(', '),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 250,
      render: (_, student) => (
        <div className='flex gap-3 w-full'>
          <Button className='outline-none' onClick={() => handleDelete(student.id)}>
            <MdDeleteForever size={24} className='text-red-500' />
          </Button>
          <Button onClick={() => handleEdit(student)}>
            <FaEdit size={24} className='text-blue-600' />
          </Button>
          <Button onClick={() => handleView(student)}>
            <GrView size={24} className='text-green-700' />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '25px', maxWidth: '100%', margin: 'auto', paddingTop: '80px' }}>
        <h1 className="text-2xl font-bold text-cyan-600 mb-6">Students Detail</h1>
        
        <Input
          placeholder="Search students..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginBottom: '20px', width: '300px' }}
        />
        <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}>
          <Table
            dataSource={filteredStudents}
            columns={columns}
            rowKey="id"
            pagination={false}
            scroll={{ y: 300 }}
          />
        </div>
        
        <Modal
          title="Edit Student"
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
        >
          <Form
            layout="vertical"
            form={form}  
            onFinish={handleModalOk}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input the first name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input the last name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input the email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input the phone number!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: 'Please input the age!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item className='mb-4'>
              <label className='block mb-1 font-semibold'>Course</label>
              <div className='flex flex-wrap'>
                {['JS', 'Python', 'HTML', 'Data Structure'].map((course) => (
                  <label key={course} className="mr-4">
                    <input 
                      type="checkbox"
                      value={course}
                      checked={selectedCourses.includes(course)}
                      onChange={() => handleCheckboxChange(course)}
                      className="mr-2"
                    />
                    {course}
                  </label>
                ))}
              </div>
            </Form.Item>
            <Form.Item>
              <Button className=' w-full bg-cyan-600 text-white p-2 rounded hover:bg-cyan-500' htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
         
          visible={isViewModalVisible}
          onCancel={() => setIsViewModalVisible(false)}
          footer={null}
        >
          {viewingStudent && (
           <div
           style={{
             padding: '20px',
             borderRadius: '10px',
             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
             backgroundColor: '#f9f9f9',
             maxWidth: '400px',
             margin: 'auto',
             lineHeight: '1.6',
             fontFamily: 'Arial, sans-serif'
           }}
         >
           <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
             Student Details
           </p>
           <p><strong>First Name:</strong> {viewingStudent.firstName}</p>
           <p><strong>Last Name:</strong> {viewingStudent.lastName}</p>
           <p><strong>Email:</strong> {viewingStudent.email}</p>
           <p><strong>Phone Number:</strong> {viewingStudent.phoneNumber}</p>
           <p><strong>Age:</strong> {viewingStudent.age}</p>
           <p><strong>Department:</strong> {viewingStudent.department}</p>
           <p><strong>Course:</strong> {viewingStudent.course.join(', ')}</p>
         </div>
         
          )}
        </Modal>
      </div>
     
      <ToastContainer />
    </div>
  );
};

export default StudentDetail;
