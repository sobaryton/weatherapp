/**
 * Functions that call the API
 */
import axios from "axios";

const userId: String | undefined = process.env.REACT_APP_OPENWEATHER_API;

const api: any = axios.create({
  baseURL: "https://api.openweathermap.org",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function that calls the API with the end point "forecast"
export const callWeatherAPI = async (): Promise<any> => {
  return await api.get(`data/2.5/forecast`, {
    params: {
      q: "London",
      appid: userId,
      units: "metric",
    },
  });
};

// Function that calls the API with the end point "weather"
export const callAPIGetCurrentWeather = async (): Promise<any> => {
  return await api.get(`data/2.5/weather`, {
    params: {
      q: "London",
      appid: userId,
      units: "metric",
    },
  });
};
