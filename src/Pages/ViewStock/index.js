import { Space, Table, Typography, Button, DatePicker } from "antd";
import { useEffect, useState } from "react";
import moment from "moment"; // Import moment library
import { getCustomers } from "../../API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setLoading(true);
  
    // Mock data for demonstration
    const mockData = [
      {
        key: 1,
        date: moment("2024-04-30").format("DD/MM/YYYY"),
        category: ["Clothing", "Electronics","Clothing", "Electronics"], 
        subCategory: ["Smartphones", "Tablets","ghgf"], 
        quantity: [10, 10,15], 
      },
      {
        key: 2,
        date: moment("2024-04-29").format("DD/MM/YYYY"), 
        category: ["Clothing", "Electronics","Clothing", "Electronics"], 
        subCategory: ["T-Shirts", "Jeans"], 
        quantity: [20, 30], 
      },
      {
        key: 3,
        date: moment("2024-04-28").format("DD/MM/YYYY"), // Format date
        category: ["Clothing", "Electronics","Clothing", "Electronics"], 
        subCategory: ["Laptops", "Headphones"],
        quantity: [5, 10], 
      },
      {
        key: 4,
        date: moment("2024-04-27").format("DD/MM/YYYY"), 
        category: ["Clothing", "Electronics","Clothing", "Electronics"], 
        subCategory: ["Dresses", "Sweaters"], 
        quantity: [15, 25], 
      },
      {
        key: 5,
        date: moment("2024-04-26").format("DD/MM/YYYY"),
        category: ["Clothing", "Electronics","Clothing", "Electronics"], 
        subCategory: ["Cameras", "Smartwatches"],
        quantity: [8, 12], 
      },
      {
        key: 6,
        date: moment("2024-04-25").format("DD/MM/YYYY"), // Format date
        category: ["Clothing", "Electronics","Clothing", "Electronics"], 
        subCategory: ["Skirts", "Pants"], 
        quantity: [10, 20], 
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

  return (
    <div className="background-container2"  style={{ overflowY: 'auto', maxHeight: '1000px' ,height:'100vh'}}> 
      <Space size={40} direction="vertical" className="view">
        <Typography.Title level={4} className="veee" style={{  fontSize: '35px', marginTop:'20px',marginLeft:'65px' }}>VIEW STOCK</Typography.Title>
        <Space>
          <DatePicker 
            className="datee"
            format="DD/MM/YYYY" 
            onChange={handleDateChange} 
            placeholder="Select Date" 
            style={{ width: 200 }}
          />
          <Button type="primary"   onClick={handleSubmitButtonClick}>Submit</Button>
        </Space>
        <div className="table-container" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Table
            loading={loading}
            columns={[
              {
                title: "DATE",
                dataIndex: "date",
                key: "date",
                width: 170,
              },
              {
                title: "CATEGORY",
                dataIndex: "category",
                key: "category",
                width: 170,
                render: (text, record, index) => (
                    <div>
                      {record.category.map((category, idx) => (
                        <div key={idx}>
                          <div>{category}</div>
                         
                        </div>
                      ))}
                    </div>
                  ),
                },
              
              {
                title: "SUB CATEGORY",
                dataIndex: "subCategory",
                key: "subCategory",
                width: 170,
                render: (text, record, index) => (
                  <div>
                    {record.subCategory.map((subCategory, idx) => (
                      <div key={idx}>
                        <div>{subCategory}</div>
                       
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "QUANTITY",
                dataIndex: "quantity",
                key: "quantity",
                width: 170,
                render: (text, record, index) => (
                    <div>
                      {record.quantity.map((quantity, idx) => (
                        <div key={idx}>
                          <div>{quantity}</div>
                         
                        </div>
                      ))}
                    </div>
                  ),
                },
            ]}
            
            dataSource={dataSource}
            pagination={{
              pageSize: 100,
            }}
            style={{ fontSize: '25px' }}
          />
        </div>
      </Space>
    </div>
  );
}

export default Customers;
