import React, { useState } from "react";

const Weather = (searchInput) => {
  const apiKey = "ec1aad8f82b0340565542e90bd6071cf";

  const [Data, setData] = useState([{}]);

  const getData = () => {
    {
      fetch(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${searchInput.searchInput}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      <button onClick={getData}>Get Weather</button>

      {typeof Data.current === "undefined" ? (
        <div>
          <p>Weather Report</p>
        </div>
      ) : (
        <div>
          <h4>Temperature:{Data.current.temperature}℃</h4>
          <h4>Wind Speed:{Data.current.wind_speed} m/s</h4>
          <h4>weather_icon</h4>
          <img
            src={Data.current.weather_icons}
            alt={Data.location.name}
            width="150px"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
