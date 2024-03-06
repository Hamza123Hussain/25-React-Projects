import React, { useEffect, useState } from 'react';
import Search from './Search';
import './style.css';

const Weather = () => {
  const [weatherdata, setWeatherData] = useState({});
  const [search, setSearch] = useState("lahore");
  const [loading, setLoading] = useState(true);

  const handleFetchData = async (cityname) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bcccaf2e736f31f586bbaf430626fbd5`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setLoading(false);
        setWeatherData(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleClick = (e) => {
    if(e.key=='enter'){
    handleFetchData(search);}
    handleFetchData(search)
  };

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    handleFetchData(search);
  }, []);

  return (
    <>
      <div style={{ border: '3px solid green', padding: "60px", backgroundColor: 'white', color: 'black', borderRadius: '10%' }}>
        <Search search={search} setsearch={setSearch} handleclick={handleClick} />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <div className="city-name">
              <h2>{weatherdata.name},
                <span>{weatherdata.sys.country}</span>
              </h2>
            </div>
            <div className="date">
              <span>{getCurrentDate()}</span>
            </div>
            <h4> TEMPERATURE : {Math.floor(weatherdata.main.temp - 273.15)}</h4>
            <h4>Feels Like : {Math.ceil(weatherdata.main.feels_like - 273.15)}</h4>
            <p className="description">
              {weatherdata && weatherdata.weather && weatherdata.weather[0] && weatherdata.weather[0].description.toUpperCase()}
            </p>
           
       
                <div style={{display:'flex', gap:"20px",justifyContent:'center'}}>
                  <p className="wind">Wind Speed: {weatherdata.wind.speed}</p>
                  <p className="humidity">Humidity: {weatherdata.main.humidity}%</p>
                </div>
           
              
        
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
