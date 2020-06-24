/**
 * All functions that manipulate the state
 */
import { callWeatherAPI, callAPIGetCurrentWeather } from "./api-calls";
import { IForecast } from "../Interfaces/interfaces";

// Function that will update the temperature in the header of the App
export const getCurrentWeather = async (
  updateCurrentWeather: (temp: number) => void,
  updateShowCurrentTemp: (show: boolean) => void
): Promise<void> => {
  // We put a try and catch in order for the app to not crash with an empty state if the API call fails
  try {
    // This is the API call with the endpoint "weather"
    updateShowCurrentTemp(false);
    const res = await callAPIGetCurrentWeather();
    updateCurrentWeather(Math.floor(res.data.main.temp));
    updateShowCurrentTemp(true);
  } catch (error) {
    console.log(error);
  }
};

// Function that will update the list of weather forecast for the next 5 days
export const getWeather = async (
  setForecast: (forecast: IForecast[]) => void
): Promise<void> => {
  // We put a try and catch in order for the app to not crash with an empty state if the API call fails
  try {
    // This is the API call with the endpoint "forecast"
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

    res.data.list.forEach((day: any) => {
      // We loop through the array of data that the API returns and we update the state
      const date: Date = new Date(day.dt_txt);
      const dayInTheWeek: string = weekDay[date.getUTCDay()];
      const hourForecast: number = date.getHours();

      // We take the weather only if this is between 12pm or 3pm
      if (hourForecast >= 12 && hourForecast <= 15) {
        // We check first if we didn't have a value for this day before
        if (!days.includes(dayInTheWeek)) {
          // If not, we push the day name in the array "days", to keep track
          days.push(dayInTheWeek);
          // We push the info for the state in the array "daysWeather"
          daysWeather.push({
            day: dayInTheWeek,
            temperature: Math.floor(day.main.temp),
            desc: day.weather[0].description,
            icon: day.weather[0].icon,
          });
        }
      }
    });
    // We update the state with the array "daysWeather"
    setForecast(daysWeather);
  } catch (error) {
    console.log(error);
  }
};
