import React from "react";

const WeatherItem = (props: any): JSX.Element => {
  return (
    <div className="dayItem">
      <p>{new Date(props.forecast.day * 1000).toISOString()}</p>
      <div className="itemWeather">
        <p>{props.forecast.temperature}deg</p>
      </div>
    </div>
  );
};

export default WeatherItem;
