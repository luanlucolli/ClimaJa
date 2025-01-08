import React from "react";
import "./WeatherCard.css";
import sol from "./assets/luz-do-sol.png";
import lua from "./assets/lua-crescente.png";

const WeatherCard = ({ weatherData }) => {
  const {
    name,
    sys: { country, sunrise, sunset },
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    clouds: { all: cloudiness },
  } = weatherData;

  const getIconUrl = (icon) =>
    `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="weather-card-container">
      <div className="weather-card">
        <div className="weather-header">
          <h2>
            {name}, {country}
          </h2>
        </div>

        <div className="main-and-description">
          <div className="weather-main">
            <img
              src={getIconUrl(weather[0].icon)}
              alt={weather[0].description}
              className="weather-icon"
            />
            <p className="weather-description">{weather[0].description}</p>
          </div>
          <div className="weather-temp">
            <h3>{Math.round(temp)}°C</h3>
            <p>
              <span className="temp-max">
                <span className="highlight-max">Máx:</span>{" "}
                {Math.round(temp_max)}°C
              </span>{" "}
              |{" "}
              <span className="temp-min">
                <span className="highlight-min">Mín:</span>{" "}
                {Math.round(temp_min)}°C
              </span>
            </p>
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <p>Nuvens</p>
            <h4>{cloudiness}%</h4>
          </div>
          <div className="detail-item">
            <p>Umidade</p>
            <h4>{humidity}%</h4>
          </div>
          <div className="detail-item">
            <p>Vento</p>
            <h4>{Math.round(speed)} km/h</h4>
          </div>
        </div>

        <div className="weather-footer">
          <div>
            <img src={sol} alt="Nascer do Sol" className="footer-icon" />{" "}
            Nascer: <strong>{formatTime(sunrise)}</strong>
          </div>
          <div>
            <img src={lua} alt="Pôr do Sol" className="footer-icon" /> Pôr:{" "}
            <strong>{formatTime(sunset)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
