/**
 * All functions that manipulate the state
 */
import { callWeatherAPI } from "./api-calls";
import { IForecast } from "../Interfaces/interfaces";

export const getWeather = async (setForecast): Promise<void> => {
  const res = await callWeatherAPI();

  const daysWeather: Array<IForecast> = [];
  const days: Array<string> = [];
  const weekDay: Array<string> = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  res.data.list.forEach((day) => {
    const date: Date = new Date(day.dt_txt);
    const dayInTheWeek: string = weekDay[date.getUTCDay()];
    const hourForecast: number = date.getHours();

    if (hourForecast >= 12 && hourForecast <= 15) {
      // We take the weather only if this is between 12pm or 3pm
      // We check first if we didn't have a value for this day before
      if (!days.includes(dayInTheWeek)) {
        days.push(dayInTheWeek);
        daysWeather.push({
          day: dayInTheWeek,
          temperature: Math.floor(day.main.temp),
          desc: day.weather[0].description,
          icon: day.weather[0].icon,
        });
      }
    }
  });
  setForecast(daysWeather);
};
