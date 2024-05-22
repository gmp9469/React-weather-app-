import React from "react";
import "../styles/weatherCard.css";

//import weather data that is shown
const WeatherCard = ({ day, description, temperature, humidity, wind }) => {
  //analysis of temp
  const getTemperatureDescription = () => {
    if (temperature >= 85) {
      return "Hot";
    } else if (temperature >= 60) {
      return "Warm";
    } else if (temperature >= 40) {
      return "Chilly";
    } else {
      return "Cold";
    }
  };
  //analysis of precipitation
  const getHumidityDescription = () => {
    if (humidity >= 60) {
      return "Likely Rain";
    } else if (humidity >= 30) {
      return "Chance of Rain";
    } else {
      return "Clear Skies";
    }
  };
  //analysis of wind
  const getWindDescription = () => {
    if (wind >= 15) {
      return "Windy";
    } else if (wind >= 5) {
      return "Breezy";
    } else {
      return "Not Windy";
    }
  };
  //analysis of day
  const dayQuality = () => {
    const temperatureDesc = getTemperatureDescription();
    const humidityDesc = getHumidityDescription();
    const windDesc = getWindDescription();

    if (
      (temperatureDesc === "Warm" || temperatureDesc === "Hot") &&
      humidityDesc === "Clear Skies"
    ) {
      return "Nice Day Outside";
    } else if (humidityDesc === "Chance of Rain") {
      return "Chance of Rain";
    } else if (temperatureDesc === "Cold" || humidityDesc === "Likely Rain") {
      return "Bad Day Outside";
    } else if (temperatureDesc === "Chilly" && windDesc != "Not Windy") {
      return "Chilly";
    } else {
      return "Decent Day Outside";
    }
  };

  return (
    <div className="weather-container">
      <p className="weather-date">{day}</p>
      <div className="weather-card">
        <p className="weather-description">{description}</p>
        <p className="weather-temperature">&nbsp;{Math.floor(temperature)}°</p>
        <div className="weather-humidity-wind">
          <p>
            🌧:{Math.floor(humidity)}% | ༄:{Math.floor(wind)}mph
          </p>
        </div>
      </div>
      <p className="weather-quality">{dayQuality()} </p>
    </div>
  );
};

export default WeatherCard;
