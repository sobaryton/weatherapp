import React, { useState } from "react";
import Header from "./Components/Header";
import WeatherList from "./Components/WeatherList";
import { getWeather } from "./utils/utils";
import { IForecast } from "./Interfaces/interfaces";
import "./App.css";

const App = (): JSX.Element => {
  const [forecast, updateForecast] = useState<IForecast[]>([]);

  React.useEffect((): void => {
    if (forecast.length === 0) {
      getWeather(updateForecast);
    }
  }, [forecast.length]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <WeatherList forecast={forecast} />
      </section>
    </div>
  );
};

export default App;
