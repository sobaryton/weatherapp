/**
 * All functions that manipulate the state
 */
import { callWeatherAPI } from "./api-calls";
import { IForecast } from "../Interfaces/interfaces";

export const getWeather = async (setForecast): Promise<void> => {
  const res = await callWeatherAPI();
  const days: Array<IForecast> = [];

  res.data.list.forEach((day) => {
    days.push({
      day: day.dt,
      temperature: day.main.temp,
      desc: day.weather[0].description,
      icon: day.weather[0].icon,
    });
  });
  setForecast(days);
};
