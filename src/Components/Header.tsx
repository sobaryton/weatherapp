import React from "react";
import { IPropsHeader } from "../Interfaces/interfaces";

const Header = (props: IPropsHeader): JSX.Element => {
  const { forecast, counter, time } = props;
  let tempNow: number = 0;
  if (forecast.length !== 0) {
    tempNow = forecast[0].temperature;
  }
  return (
    <header className="App-header">
      <div className="header-desc">
        <h1>London</h1>
        <p>{time}</p>
        <p>{tempNow === 0 ? "" : tempNow}&#176;</p>
      </div>
      <div className="progress-bar">
        <p>Reloading in {counter}</p>
        <div className="bar-wrapper">
          <div className="bar-progress"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
