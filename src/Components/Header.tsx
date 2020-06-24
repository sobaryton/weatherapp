import React, { useState } from "react";
import { Transition, animated, config } from "react-spring/renderprops";
import { IPropsHeader } from "../Interfaces/interfaces";
import { getCurrentWeather } from "../utils/utils";

const Header = (props: IPropsHeader): JSX.Element => {
  const { forecast, onReset } = props;
  const [counter, updateCounter] = useState<number>(60);
  const [time, updateTime] = useState<string>("");
  const [currentWeather, updateCurrentWeather] = useState<number>(0);
  const [showCurrentTemp, updateShowCurrentTemp] = useState<boolean>(true);

  React.useEffect(() => {
    if (forecast.length === 0) {
      getCurrentWeather(updateCurrentWeather, updateShowCurrentTemp);
    }
    const refreshSec = setInterval(() => {
      // Interval every second to refresh the counter, and the timer
      if (counter === 0) {
        // Every minute, reset the counter, get the current weather in the header, refresh the forecast list
        updateCounter(60);
        onReset();
        getCurrentWeather(updateCurrentWeather, updateShowCurrentTemp);
      } else {
        updateCounter(counter - 1);
      }

      // Update the timer
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
        <div className="currentTemp">
          <Transition
            items={showCurrentTemp}
            config={config.slow}
            from={{ opacity: 0, transform: "translate(0,-3rem)" }}
            enter={{ opacity: 1, transform: "translate(0,0)" }}
            leave={{ opacity: 0, transform: "translate(0,-3rem)" }}
          >
            {(showCurrentTemp) =>
              showCurrentTemp &&
              ((props) => (
                <animated.p style={props}>
                  {currentWeather === 0 ? "" : currentWeather}&#176;
                </animated.p>
              ))
            }
          </Transition>
        </div>
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
