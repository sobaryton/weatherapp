import React from "react";
import { IForecast } from "../Interfaces/interfaces";
import WeatherItem from "./WeatherItem";

const WeatherList = (props: { forecast: IForecast[] }): JSX.Element => {
  let dayItems;
  if (props.forecast.length !== 0) {
    dayItems = props.forecast.map((dayForecast, id) => (
      <WeatherItem forecast={dayForecast} key={id} />
    ));
  } else {
    dayItems = <div className="emptyList"></div>;
  }
  return <div className="dayList">{dayItems}</div>;
};

export default WeatherList;
