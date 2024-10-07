import React, { useState } from 'react';
import { FaLightbulb, FaFan, FaThermometerHalf, FaCamera } from 'react-icons/fa';


const DeviceControl = ({ addedDevices }) => {
  const [lightOn, setLightOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);
  const [temperature, setTemperature] = useState(72); // Default temperature

  const handleIncreaseTemp = () => setTemperature(temperature + 1);
  const handleDecreaseTemp = () => setTemperature(temperature - 1);
  const handleCameraClick = () => {
    alert('No home camera connected yet.');
  };

  // Filter known devices (light, fan, thermostat, camera)
  const knownDevices = ['Smart Light Switch', 'Smart Thermostat', 'Smart Fan', 'Smart Camera'];

  // Devices added by the user that match known types
  const filteredKnownDevices = addedDevices.filter(device => knownDevices.includes(device.model));

  // Devices added by the user that are unknown types
  const filteredUnknownDevices = addedDevices.filter(device => !knownDevices.includes(device.model));

  return (
    <div>
      <div className="device-control">
        <h3>Control Your Smart Devices</h3>

        {/* Light Control */}
        <div className="device">
          <FaLightbulb color={lightOn ? 'yellow' : 'gray'} size={40} />
          <p>Light</p>
          <button className="control-btn" onClick={() => setLightOn(!lightOn)}>
            {lightOn ? 'Turn Off' : 'Turn On'}
          </button>
        </div>

        {/* Fan Control */}
        <div className="device">
          <FaFan color={fanOn ? 'blue' : 'gray'} size={40} />
          <p>Fan</p>
          <button className="control-btn" onClick={() => setFanOn(!fanOn)}>
            {fanOn ? 'Turn Off' : 'Turn On'}
          </button>
        </div>

        {/* Thermostat Control */}
        <div className="device">
          <FaThermometerHalf color="red" size={40} />
          <p>Thermostat</p>
          <div className="temperature-control">
            <button className="temp-btn" onClick={handleDecreaseTemp}>-</button>
            <span>{temperature}°F</span>
            <button className="temp-btn" onClick={handleIncreaseTemp}>+</button>
          </div>
        </div>

        {/* Camera Control */}
        <div className="device">
          <FaCamera color="gray" size={40} />
          <p>Camera</p>
          <button className="control-btn" onClick={handleCameraClick}>
            View Camera
          </button>
        </div>

        {/* Display User-Added Known Devices */}
        {filteredKnownDevices.length > 0 && (
          <div>
            <h3>User Added Devices (Known Types)</h3>
            {filteredKnownDevices.map((device, index) => (
              <div key={index} className="device">
                <p>{device.name}</p>
                <p>Model: {device.model}</p>
                <p>Serial: {device.serialNumber}</p>
                <p>Status: {device.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Display User-Added Unknown Devices */}
      {filteredUnknownDevices.length > 0 && (
        <div className="unknown-devices">
          <h3>User Added Devices (Unknown Types)</h3>
          {filteredUnknownDevices.map((device, index) => (
            <div key={index} className="device">
              <p>{device.name}</p>
              <p>Model: {device.model}</p>
              <p>Serial: {device.serialNumber}</p>
              <p>Status: {device.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeviceControl;
