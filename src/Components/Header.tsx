import React, { useState } from "react";
import { IPropsHeader } from "../Interfaces/interfaces";
import { getCurrentWeather } from "../utils/utils";

const Header = (props: IPropsHeader): JSX.Element => {
  const { forecast, onReset } = props;
  const [counter, updateCounter] = useState<number>(60);
  const [time, updateTime] = useState<string>("");
  const [currentWeather, updateCurrentWeather] = useState(0);

  React.useEffect(() => {
    if (forecast.length === 0) {
      getCurrentWeather(updateCurrentWeather);
    }
    const refreshSec = setInterval(() => {
      // Interval every second to refresh the counter and the progressbar
      if (counter === 0) {
        updateCounter(60);
        onReset();
        getCurrentWeather(updateCurrentWeather);
      } else {
        updateCounter(counter - 1);
      }
      const now = new Date();
      const newTime = now.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
      });
      updateTime(newTime);
    }, 1000);
    return () => clearInterval(refreshSec);
  }, [counter, onReset, forecast.length]);

  return (
    <header className="App-header">
      <div className="header-desc">
        <h1>London</h1>
        <div className="time">
          <p>{time}</p>
        </div>
        <p className="currentTemp">
          {currentWeather === 0 ? "" : currentWeather}&#176;
        </p>
      </div>
      <div className="progress-bar">
        <p>Reloading in {counter}s</p>
        <div className="bar-wrapper">
          <div
            className="bar-progress"
            style={{ width: `${((60 - counter) / 60) * 100}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
