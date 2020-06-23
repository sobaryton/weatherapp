import React from "react";

const WeatherItem = (props: any): JSX.Element => {
  return (
    <div className="dayItem">
      <div className="itemWeather">
        <p>{props.day}</p>
        <p>{props.temperature}&#176;</p>
      </div>
      <div className="itemIcon">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="weather icon"
        />
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default WeatherItem;
