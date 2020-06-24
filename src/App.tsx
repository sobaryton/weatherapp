import React, { useState } from "react";
import Header from "./Components/Header";
import WeatherList from "./Components/WeatherList";
import { getWeather } from "./utils/utils";
import { IForecast } from "./Interfaces/interfaces";
import "./animations.css";
import "./App.css";

const App = (): JSX.Element => {
  const [forecast, updateForecast] = useState<IForecast[]>([]);

  React.useEffect(() => {
    if (forecast.length === 0) {
      getWeather(updateForecast);
    }
  }, [forecast.length]);

  return (
    <div className="App">
      <Header forecast={forecast} onReset={() => getWeather(updateForecast)} />
      <WeatherList forecast={forecast} />
    </div>
  );
};

export default App;
