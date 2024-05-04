import { Space, Table, Typography, Button, DatePicker, Modal, Form, Input } from "antd"; // Import Modal component
import { useEffect, useState } from "react";


function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // State for selected rows
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  // Form instance
  const [form] = Form.useForm();

  useEffect(() => {
    setLoading(true);
    // Mock data for demonstration
    setLoading(false);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  const handleSubmitButtonClick = () => {
    console.log("Submit button clicked");
    console.log("Selected Date:", selectedDate);
  };

  // Function to handle Add Employee button click
  const handleAddEmployee = () => {
    // Reset form fields when modal opens
    form.resetFields();
    setModalVisible(true);
  };

  // Function to handle Delete Employee button click
  const handleDeleteEmployee = () => {
    // Implement logic for deleting employee
    console.log("Delete Employee button clicked");
 
    const updatedDataSource = dataSource.filter(item => !selectedRowKeys.includes(item.key));
    setDataSource(updatedDataSource);
    // Clear selectedRowKeys
    setSelectedRowKeys([]);
  };

  // Function to handle form submission
  const handleFormSubmit = (values) => {
    // Add new employee to the data source with a unique ID
    const newData = {
      key: dataSource.length + 1, // Generate a unique key for the new entry
      id: dataSource.length + 1, // Generate a unique ID
      ...values,
    };
    setDataSource([...dataSource, newData]);
 
    setModalVisible(false);
  };


  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  return (
    <div className="background-container2" style={{ overflow: 'auto', maxHeight: '1000px' }}>
      <Space size={40} direction="vertical" className="view">
        <Typography.Title level={4} className="veee" style={{ fontSize: '35px', marginBottom: '15px', marginLeft: '65px' }}>ADD EMPLOYEES</Typography.Title>
        <Space>
          <DatePicker
            className="datee"
            format="DD/MM/YYYY"
            onChange={handleDateChange}
            placeholder="Select Date"
            style={{ width: 200 }}
          />
        
        </Space>
        <div className="table-container"  style={{ marginLeft: '70px', marginRight: 'auto' }}>
          <Table
            loading={loading}
            rowSelection={rowSelection} 
            columns={[
              {
                title: "ID",
                dataIndex: "id",
                key: "id",
                width: 100,
              },
              {
                title: "First Name",
                dataIndex: "firstName",
                key: "firstName",
                width: 140,
              },
              {
                title: "Last Name",
                dataIndex: "lastName",
                key: "lastName",
                width: 140,
              },
              {
                title: "Phone Number",
                dataIndex: "phoneNumber",
                key: "phoneNumber",
                width: 140,
              },
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
                width: 140,
              },
            ]}
            dataSource={dataSource}
            pagination={{
              pageSize: 1000,
            }}
            style={{ fontSize: '25px' }}
          />
      
          <Button type="primary" className="add-employee-button" onClick={handleAddEmployee}>Add Employee</Button>
        </div>
      </Space>
  
      <Modal
        title="Add Employee"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => {form.submit()}}>
            Submit
          </Button>,
        ]}
      >
     
        <Form form={form} onFinish={handleFormSubmit}>
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter first name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter last name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please enter phone number' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter address' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Customers;
