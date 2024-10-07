import React, { useState } from 'react';


const generateSerialNumber = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let serialNumber = '';
  for (let i = 0; i < 8; i++) {
    serialNumber += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return serialNumber;
};

const generateModel = () => {
  const models = ['Smart Thermostat', 'Smart Light Switch', 'Smart Humidifier'];
  return models[Math.floor(Math.random() * models.length)];
};

const generateName = () => {
  const names = ['Home Thermostat', 'Home Light Switch', 'Home Humidifier'];
  return names[Math.floor(Math.random() * names.length)];
};

const DeviceInputForm = ({ onAddDevice }) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [model, setModel] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('OFFLINE');
  const [feedback, setFeedback] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (!serialNumber || !model || !name) {
      alert("Please enter the device name, serial number, and model.");
      return;
    }


    onAddDevice({ serialNumber, model, name, status });

  
    setFeedback(`Device "${name}" added successfully!`);


    setSerialNumber('');
    setModel('');
    setName('');
  };


  const handleGenerateDeviceInfo = () => {
    setSerialNumber(generateSerialNumber());
    setModel(generateModel());
    setName(generateName());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Your Device</h3>
      
      <div>
        <label>Device Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter device name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Serial Number:</label>
        <input
          type="text"
          value={serialNumber}
          placeholder="Enter serial number"
          onChange={(e) => setSerialNumber(e.target.value)}
        />
      </div>

      <div>
        <label>Model:</label>
        <input
          type="text"
          value={model}
          placeholder="Enter model"
          onChange={(e) => setModel(e.target.value)}
        />
      </div>

      <button type="submit-btn">Add Device</button>

  
      <button type="button" onClick={handleGenerateDeviceInfo}>
        Generate Random Device Info
      </button>
      {feedback && <p style={{ color: 'green' }}>{feedback}</p>}
    </form>
  );
};

export default DeviceInputForm;
