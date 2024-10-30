import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StudentDetail = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '234-567-8901',
    },
    {
      id: 3,
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '345-678-9012',
    },
    {
      id: 4,
      fullName: 'Bob Brown',
      email: 'bob.brown@example.com',
      phone: '456-789-0123',
    },
    {
      id: 5,
      fullName: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      phone: '567-890-1234',
    },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setEditingStudent(null);
  };

  const handleModalOk = (values) => {
    const updatedStudents = students.map(student => 
      student.id === editingStudent.id ? { ...student, ...values } : student
    );
    setStudents(updatedStudents);
    handleModalClose();
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, student) => (
        <span>
          <Button onClick={() => handleEdit(student)} type="primary">Edit</Button>
          <Button onClick={() => handleDelete(student.id)} type="danger" style={{ marginLeft: 8 }}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', paddingTop: '80px' }}>
        <h1 className="text-2xl font-bold text-cyan-600 mb-6">Students Detail</h1>
        <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}>
          <Table 
            dataSource={students} 
            columns={columns} 
            rowKey="id" 
            pagination={false} 
            scroll={{ y: 300 }} // Set fixed height for vertical scrolling
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
            initialValues={editingStudent}
            onFinish={handleModalOk}
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input the full name!' }]}
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
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please input the phone number!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDetail;
