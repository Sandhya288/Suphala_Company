import React, { useState } from 'react';


const MyComponent = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    date: "",
    itemName: "",
    customName: "",
    product: "",
    quantity: "",
    totalRupees: ""
  });

  // Function to handle form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // You can access form data from formData state
    console.log(formData);
    
    // Reset form data after submission
    setFormData({
      date: "",
      itemName: "",
      customName: "",
      product: "",
      quantity: "",
      totalRupees: ""
    });
  };

  return (
    <div className="background-container5" >
      <div className="container2" style={{ overflowY: 'auto', maxHeight: '400px' ,height:'100vh',marginTop:'20px'}}>
        <header className="header1">
          <h1>SALES</h1>
        </header>

        <div className="row">
          <section className="batch-section">
            <label htmlFor="date" className="label">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className="input-field" placeholder="Select Date" />
          </section>
       
          <section className="batch-section">
            <label htmlFor="itemName" className="label">Item Name:</label>
            <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleInputChange} className="input-field" placeholder="Enter Item Name" />
          </section>

          <div className="spacer1"></div>

          <section className="batch-section">
            <label htmlFor="customName" className="label">Custom Name:</label>
            <input type="text" id="customName" name="customName" value={formData.customName} onChange={handleInputChange} className="input-field" placeholder="Enter Custom Name" />
          </section>
        </div>

        <div className="spacer1"></div>

        <div className="row">
          <section className="batch-section">
            <label htmlFor="product" className="label">Product:</label>
            <input type="text" id="product" name="product" value={formData.product} onChange={handleInputChange} className="input-field" placeholder="Enter Product Name" />
          </section>

          <div className="spacer1"></div>

          <section className="batch-section">
            <label htmlFor="quantity" className="label">Quantity:</label>
            <input type="number" id="quantity" name="quantity" step="0.01" value={formData.quantity} onChange={handleInputChange} className="input-field" placeholder="Enter Quantity" />
          </section>

          <div className="spacer1"></div>

          <section className="batch-section">
            <label htmlFor="totalRupees" className="label">Total Rupees:</label>
            <input type="number" id="totalRupees" name="totalRupees" value={formData.totalRupees} onChange={handleInputChange} className="input-field" placeholder="Enter Total Rupees" />
          </section>
        </div>

        <section className="submit-section1">
          <div className="submit-container">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyComponent;
