import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; 
import './App.css';
import WeatherComponent from './components/WeatherComponent';
import DeviceControl from './components/DeviceControl';
import D3Chart from './components/D3Chart';
import DeviceInputForm from './components/DeviceInputForm'; 
import AnimateSVG from './components/AnimateSVG';

const energyData = [
  { device: 'Light', consumption: 150 },
  { device: 'Fan', consumption: 200 },
  { device: 'HVAC', consumption: 600 },
  { device: 'Camera', consumption: 50 },
];

const App = () => {
  const [devices, setDevices] = useState([]);
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 1000);
  }, []);

  // Add new device to the state
  const handleAddDevice = (newDevice) => {
    setDevices([...devices, newDevice]);
  };


  
  return (
    preload ? <div className="preload"> Loading...</div> :
    <div className="app">

  
      <div className="svg-container">
        <AnimateSVG />
      </div>

      <div className="weather-container">
        <WeatherComponent />
      </div>

      <Draggable>
        <div className="draggable-container grid-item">
          <DeviceInputForm onAddDevice={handleAddDevice} />
        </div>
      </Draggable>

      <Draggable>
        <div className="draggable-container grid-item">
          <DeviceControl addedDevices={devices} />
        </div>
      </Draggable>

      <Draggable>
        <div className="draggable-container grid-item">
          <D3Chart data={energyData} />
        </div>
      </Draggable>

     
    </div>
  );
};

export default App;
