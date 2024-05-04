import React, { useState } from 'react';

const MyComponent = () => {
  // State to store selected material option
  const [selectedMaterial, setSelectedMaterial] = useState("");
  
  const [selectedSubMaterial, setSelectedSubMaterial] = useState("");
 
  const [subMaterialQuantities, setSubMaterialQuantities] = useState({});
  
  const [subMaterialOptions, setSubMaterialOptions] = useState([]);
  
  const [displayContent, setDisplayContent] = useState("");
  const[sub,setSub] = useState("");
  // Define the materialData object
  const materialData = {
    option1: {
      label: "JackFruit",
      subMaterials: {
        Raw: "raw",
        Ripe: "Ripe",
      }
    },
    option2: {
      label: "Spices",
      subMaterials: {
        Salt: "",
        Palmoil: "",
        Elachi: "",
        Atta: "",
        Glue: "",
        Cashow: "",
        DryFruits: "",
        Seed: "",
        Sugar: "",
        CoconutOil: "",
        Chilly_Powder: "",
      }
    },
    option3: {
      label: "Raw Materials",
      subMaterials: {
        Disel: "Data for Sub-Option 1 of Option 3",
        Fire_Wood: "Data for Sub-Option 2 of Option 3",
        Wood_Briquette: "Data for Sub-Option 2 of Option 3",
      }
    },
    option4: {
      label: "Packets",
      subMaterials: {
        Retrot_Pouch: "Data for Sub-Option 1 of Option 4",
        Chips_Pouch: "Data for Sub-Option 1 of Option 4",
        Stickers: "Data for Sub-Option 2 of Option 4",
      }
    }
  };

 
  const handleMaterialChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedMaterial(selectedOption);
    
    setSubMaterialOptions(Object.keys(materialData[selectedOption]?.subMaterials) || []);
   
    setSelectedSubMaterial("");
    setSubMaterialQuantities({});
  };

  // Function to handle sub-material selection change
  const handleSubMaterialChange = (event) => {
    setSelectedSubMaterial(event.target.value);
  };

 
  const handleQuantityChange = (event, subMaterial) => {
    const value = parseFloat(event.target.value);
    setSubMaterialQuantities({ ...subMaterialQuantities, [subMaterial]: isNaN(value) ? 0 : value });
  };

 
  const handleShowData = () => {
    
    const data = materialData[selectedMaterial]?.subMaterials[selectedSubMaterial];
   
    const quantity = subMaterialQuantities[selectedSubMaterial];
   
    setDisplayContent(data ? `${data} - Quantity: ${quantity || 0}` : "No data available for this option");
  };

  
  const handleSubmit = () => {
   
    setSelectedMaterial("");
    setSelectedSubMaterial("");
    setSubMaterialQuantities({});
    setDisplayContent("");
   
    document.getElementById("date").value = "";
  };

  return (
    <div className="background-container5"  >
      <div className="container2" style={{ overflowY: 'auto', maxHeight: '420px' ,height:'100vh'}}>

    
        <header className="header1">
          <h1>ADD SUB-CATEGORY</h1>
        </header>

    
        <div className="row">
         
         

       
          <div className="spacer"></div>

       
          <section className="batch-section">
            <label htmlFor="material" className="label">Category</label>
            <select id="material" onChange={handleMaterialChange}>
              <option value="">Choose Any</option>
              {Object.keys(materialData).map((optionKey) => (
                <option key={optionKey} value={optionKey}>{materialData[optionKey].label}</option>
              ))}
            </select>
          </section>

          <div className="spacer"></div>
          <section className="batch-section">
            <label htmlFor="labor" className="label">Labor:</label>
            <input type="text" id="labor"placeholder="Enter" value={sub} onChange={(event) => setSub(event.target.value)} />
          </section>

        </div>

     
        

       
        <div className="row">
         

         
         

         
          
        </div>

      
        <section className="button-section">
          <div className="button-container"></div>
        </section>

      
        <section className="submit-section1">
          <div className="submit-container">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>

       
        <section className="display-section">
          {displayContent && (typeof displayContent === "string" ? <p>{displayContent}</p> : displayContent.map((data, index) => (
            <p key={index}>{data}</p>
          )))}
        </section>
      </div>
    </div>
  );
};

export default MyComponent;
