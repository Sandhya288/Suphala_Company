import React, { useState } from 'react';

const MyComponent = () => {
  
  const [selectedMaterial, setSelectedMaterial] = useState("");
  
  const [selectedSubMaterial, setSelectedSubMaterial] = useState("");

  const [subMaterialQuantities, setSubMaterialQuantities] = useState({});
 
  const [subMaterialOptions, setSubMaterialOptions] = useState([]);

  const [displayContent, setDisplayContent] = useState("");

  const [batchNumber, setBatchNumber] = useState("");

  const [bulbInKg, setBulbInKg] = useState(""); 
  const [totalChips, setTotalChips] = useState(""); 
  const [packetChips, setPacketChips] = useState(""); 
  const [pulpStorage, setPulpStorage] = useState(""); // State for pulp storage
  const [labor, setLabor] = useState(""); 
  const [wetSeeds, setWetSeeds] = useState(""); // State for wet seeds
  const [drySeeds, setDrySeeds] = useState(""); // State for dry seeds
  const [vacuum, setVacuum] = useState(""); 
  const [nitrogen, setNitrogen] = useState(""); // State for nitrogen
  const [powder, setPowder] = useState("");
  const [laborSeed, setLaborSeed] = useState(""); 
  const [totalWaste, setTotalWaste] = useState(""); 
  const [labours, setLabours] = useState(""); 
  const [waitAfterRipping, setWaitAfterRipping] = useState(""); 
  const [dryerOfWaste, setDryerOfWaste] = useState(""); // State for dryer of waste
  const [wastePowder, setWastePowder] = useState(""); 

 
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
    // Update the display content state
    setDisplayContent(data ? `${data} - Quantity: ${quantity || 0}` : "No data available for this option");
  };

  // Function to handle form submission
  const handleSubmit = () => {
   
    setSelectedMaterial("");
    setSelectedSubMaterial("");
    setSubMaterialQuantities({});
    setDisplayContent("");
   
    document.getElementById("date").value = "";
  };

  return (
    <div className="background-container">
      <div className="container">
      
        <header className="header">
          <h1>PRODUCTION-WITHDRAW</h1>
        </header>

      
        <div className="row">
         
          <section className="quantity-section">
            <label htmlFor="date" className="label">Date:</label>
            <input type="date" id="date" />
          </section>

      
          <div className="spacer"></div>

		  <section className="batch-section">
            <label htmlFor="batch" className="label" >Batch Number:</label>
            <input type="text" id="batch" placeholder="Enter" value={batchNumber} onChange={(event) => setBatchNumber(event.target.value)} />
          </section>
         

        
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
        </div>

      
        <div className="spacer"></div>

      
        <div className="row">
        
          <section className="sub-material-section">
            <label htmlFor="subMaterial" className="label">Sub-Category</label>
            <select id="subMaterial" onChange={handleSubMaterialChange} disabled={!selectedMaterial}>
              <option value="">Choose Any</option>
              {subMaterialOptions.map((subOptionKey) => (
                <option key={subOptionKey} value={subOptionKey}>{subOptionKey}</option>
              ))}
            </select>
          </section>

          {/* Add some spacing */}
          <div className="spacer"></div>

          {/* Quantity input */}
          <section className="quantity-section">
            <label htmlFor="quantity" className="label">Quantity:</label>
            <input type="number" id="quantity" placeholder="Enter"step="0.01" value={subMaterialQuantities[selectedSubMaterial] || ""} onChange={(event) => handleQuantityChange(event, selectedSubMaterial)} disabled={!selectedSubMaterial} />
          </section>

		  <section className="date-section">
	<label htmlFor="labor" className="label"></label>
	
  </section>
        </div>


		<section className="submit-section1">
          <div className="submit-container3">
            <button>Edit</button> {/* Add the edit button */}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>

        {/* Add some spacing */}
        <div className="spacer"></div>

        {/* Bulb heading */}
        <div className="header">
          <section className="bulb-heading-section">
            <h2>BULB</h2>
          </section>
        </div>

        {/* Bulb section */}
        <div className="row">
          {/* Bulb in Kg */}
          <section className="batch-section">
            <label htmlFor="bulb" className="label">Bulb in Kg:</label>
            <input type="text" id="bulb"placeholder="Enter" value={bulbInKg} onChange={(event) => setBulbInKg(event.target.value)} />
          </section>

          {/* Add some spacing */}
          <div className="spacer"></div>

		  <section className="batch-section">
            <label htmlFor="labor" className="label">Labor:</label>
            <input type="text" id="labor"placeholder="Enter" value={labor} onChange={(event) => setLabor(event.target.value)} />
          </section>

         

          {/* Add some spacing */}
          <div className="spacer"></div>

          {/* Packet Chips */}
          <section className="batch-section">
            <label htmlFor="packetChips" className="label">Packet Chips:</label>
            <input type="text" id="packetChips" placeholder="Enter"value={packetChips} onChange={(event) => setPacketChips(event.target.value)} />
          </section>
        </div>

       
        <div className="spacer"></div>

       
        <div className="row">
        
          <section className="batch-section">
            <label htmlFor="pulpStorage" className="label">Pulp Storage:</label>
            <input type="text" id="pulpStorage"placeholder="Enter" value={pulpStorage} onChange={(event) => setPulpStorage(event.target.value)} />
          </section>

		  
		   <div className="spacer"></div>
		   <section className="batch-section">
            <label htmlFor="totalChips" className="label">Total Chips:</label>
            <input type="text" id="totalChips"placeholder="Enter" value={totalChips} onChange={(event) => setTotalChips(event.target.value)} />
          </section>

     
          <div className="spacer"></div>

     
          <section className="date-section">
            <label htmlFor="labor" className="label"></label>
           
          </section>
        </div>
		<section className="submit-section1">
          <div className="submit-container3">
            <button>Edit</button> {/* Add the edit button */}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>

        
        <div className="spacer"></div>

       
        <div className="header">
          <section className="bulb-heading-section">
            <h2>SEEDS</h2>
          </section>
        </div>

     
        <div className="row">
         
          <section className="batch-section">
            <label htmlFor="bulb" className="label">Wet Seeds</label>
            <input type="text" id="bulb" placeholder="Enter"value={bulbInKg} onChange={(event) => setBulbInKg(event.target.value)} />
          </section>

         
          <div className="spacer"></div>

          {/* Packet Chips */}
          <section className="batch-section">
            <label htmlFor="packetChips" className="label">Dry Seeds</label>
            <input type="text" id="packetChips"placeholder="Enter" value={packetChips} onChange={(event) => setPacketChips(event.target.value)} />
          </section>

		  <div className="spacer"></div>
		  <section className="batch-section">
            <label htmlFor="pulpStorage" className="label">Vaccum</label>
            <input type="text" id="pulpStorage" placeholder="Enter"value={pulpStorage} onChange={(event) => setPulpStorage(event.target.value)} />
          </section>
        </div>

        {/* Add some spacing */}
        <div className="spacer"></div>

    
        <div className="row">
         

		  
		  
		   <section className="batch-section">
            <label htmlFor="totalChips" className="label">Nitrogen</label>
            <input type="text" id="totalChips"placeholder="Enter" value={totalChips} onChange={(event) => setTotalChips(event.target.value)} />
          </section>

          {/* Add some spacing */}
          <div className="spacer"></div>

          {/* Labor */}
          <section className="batch-section">
            <label htmlFor="labor" className="label">Powder</label>
            <input type="text" id="labor"placeholder="Enter" value={labor} onChange={(event) => setLabor(event.target.value)} />
          </section>

		  <div className="spacer"></div>
		  <section className="batch-section">
	<label htmlFor="packetChips" className="label">Labour</label>
	<input type="text" id="packetChips" placeholder="Enter"value={packetChips} onChange={(event) => setPacketChips(event.target.value)} />
  </section>
        </div>
		<section className="submit-section1">
          <div className="submit-container3">
            <button>Edit</button> {/* Add the edit button */}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </section>

        
	   <div className="spacer"></div>


<div className="header">
  <section className="bulb-heading-section">
	<h2>WASTE</h2>
  </section>
</div>


<div className="row">

  <section className="batch-section">
	<label htmlFor="bulb" className="label">Total Waste</label>
	<input type="text" id="bulb"placeholder="Enter" value={bulbInKg} onChange={(event) => setBulbInKg(event.target.value)} />
  </section>

  <div className="spacer"></div>

  <section className="batch-section">
	<label htmlFor="labor" className="label">Weight After Ripping outer skin
</label>
	
	<input type="text" id="labor" placeholder="Enter"value={labor} onChange={(event) => setLabor(event.target.value)} />
  </section>

 

 
  <div className="spacer"></div>

  <section className="batch-section">
	<label htmlFor="packetChips" className="label">Labour</label>
	<input type="text" id="packetChips" placeholder="Enter"value={packetChips} onChange={(event) => setPacketChips(event.target.value)} />
  </section>
</div>

<div className="spacer"></div>


<div className="row">
 
  <section className="batch-section">
	<label htmlFor="pulpStorage" className="label">Dryer Of Waste</label>
	<input type="text" id="pulpStorage" placeholder="Enter"value={pulpStorage} onChange={(event) => setPulpStorage(event.target.value)} />
  </section>

   {/* Total Chips */}
   <div className="spacer"></div>
   <section className="batch-section">
	<label htmlFor="totalChips" className="label">Powder </label>
	<input type="text" id="totalChips"placeholder="Enter" value={totalChips} onChange={(event) => setTotalChips(event.target.value)} />
  </section>

 
  

  {/* Labor */}
  <section className="batch-section">
	<label htmlFor="labor" className="label"></label>
	
  </section>
</div>
<section className="submit-section1">
  <div className="submit-container3">
	<button>Edit</button> 
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
