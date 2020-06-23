import React, { useState } from "react";
import Header from "./Components/Header";
import WeatherList from "./Components/WeatherList";
import { getWeather } from "./utils/utils";
import { IForecast } from "./Interfaces/interfaces";
import "./App.css";

const App = (): JSX.Element => {
  const [forecast, updateForecast] = useState<IForecast[]>([]);
  const [counter, updateCounter] = useState<number>(0);
  const [time, updateTime] = useState<string>("test");

  React.useEffect((): void => {
    if (forecast.length === 0) {
      getWeather(updateForecast);
    }
  }, [forecast.length]);

  return (
    <div className="App">
      <Header forecast={forecast} counter={counter} time={time} />
      <WeatherList forecast={forecast} />
    </div>
  );
};

export default App;
