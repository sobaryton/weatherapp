import React from "react";
import { IPropsList } from "../Interfaces/interfaces";
import WeatherItem from "./WeatherItem";

const WeatherList = (props: IPropsList): JSX.Element => {
  let dayItems;
  if (props.forecast.length !== 0) {
    dayItems = props.forecast.map((dayForecast, id) => (
      <WeatherItem
        day={dayForecast.day}
        temperature={dayForecast.temperature}
        desc={dayForecast.desc}
        icon={dayForecast.icon}
        key={id}
      />
    ));
  } else {
    dayItems = <div className="emptyList"></div>;
  }
  return <div className="dayList">{dayItems}</div>;
};

export default WeatherList;
