import { Space, Table, Typography, Button, DatePicker, Modal } from "antd"; // Import Modal component
import { useEffect, useState } from "react";
import moment from "moment"; // Import moment library
import { getCustomers } from "../../API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // State for selected rows
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    setLoading(true);
  
    // Mock data for demonstration
    const mockData = [
      {
        key: 1,
        id: 101,
        firstName: "Seema",
        lastName: "Joe",
        phoneNumber: "123-456-7890",
        address: "123 Main St, Mangalore",
      },
      {
        key: 2,
        id: 102,
        firstName: "Jane",
        lastName: "Smith",
        phoneNumber: "987-654-3210",
        address: "456 Elm St, Hubli",
      },
      {
        key: 3,
        id: 103,
        firstName: "Raj",
        lastName: "Shetty",
        phoneNumber: "087-674-3210",
        address: "986 Elm St, Bangalore",
      },
      {
        key: 4,
        id: 104,
        firstName: "Seema",
        lastName: "Joe",
        phoneNumber: "123-456-7890",
        address: "123 Main St, Mangalore",
      },
      {
        key: 5,
        id: 105,
        firstName: "Raj",
        lastName: "Shetty",
        phoneNumber: "087-674-3210",
        address: "986 Elm St, Bangalore",
      },
    
     
    ];

    setDataSource(mockData);
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
    // Implement logic for adding employee
    console.log("Add Employee button clicked");
  };

  // Function to handle Delete Employee button click
  const handleDeleteEmployee = () => {
    // Implement logic for deleting employee
    console.log("Delete Employee button clicked");
    // Filter out selected employees from the data source
    const updatedDataSource = dataSource.filter(item => !selectedRowKeys.includes(item.key));
    setDataSource(updatedDataSource);
    // Clear selectedRowKeys
    setSelectedRowKeys([]);
  };

  // Table row selection config
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  return (
    <div className="background-container2"  style={{ overflow: 'auto', maxHeight: '1000px' }} > 
      <Space size={40} direction="vertical" className="view">
        <Typography.Title level={4} className="veee" style={{  fontSize: '35px', marginBottom:'15px',marginLeft:'55px' }}>VIEW EMPLOYEES</Typography.Title>
        <Space>
          <DatePicker 
            className="datee"
            format="DD/MM/YYYY" 
            onChange={handleDateChange} 
            placeholder="Select Date" 
            style={{ width: 200 }}
          />
         
        </Space>
        <div className="table-container"style={{ marginLeft: '70px', marginRight: 'auto' }}>
          <Table
            loading={loading}
            rowSelection={rowSelection} // Enable row selection
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
              pageSize: 100,
            }}
            style={{ fontSize: '25px' }}
          />
          {/* Add Employee button */}
         
<Button type="danger" className="delete-employee-button" onClick={handleDeleteEmployee}>Delete Employee</Button>

        </div>
      </Space>
      {/* Modal for adding employee */}
     
    </div>
  );
}

export default Customers;
