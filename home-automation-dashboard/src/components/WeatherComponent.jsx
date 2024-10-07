import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  FaCloudRain, FaSnowflake, FaSun, FaCloud, FaSmog } from 'react-icons/fa';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f00c38e0279b7bc85480c3fe775d518c&units=imperial`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error('Error fetching weather data', error);
    }
  };

  // Get user's geolocation
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching geolocation', error);
          setError(true);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setError(true);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);


  const getWeatherIcon = (description) => {
    if (description.includes('cloud')) {
      return <FaCloud size={40} color='whitesmoke'/>;
    } else if (description.includes('sun') || description.includes('clear')) {
      return <FaSun size={40} color='yellow'/>;
    } else if (description.includes('rain')) {
      return <FaCloudRain size={40}  color='whitesmoke'/>;
    } else if (description.includes('snow')) {
      return <FaSnowflake size={40} color='white'/>;
    } else {
      return <FaSmog size={40} />; 
    }
  };

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>Unable to fetch weather data. Please try again later.</p>;
  }

  return (
    <div className="weather-container">
      <h3>Current Weather</h3>
      <p>{weatherData.name}</p>
      <div className="weather-info">
        {getWeatherIcon(weatherData.weather[0].description)}
        <p>{weatherData.main.temp}°F</p>
      </div>
      <p>{weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;
