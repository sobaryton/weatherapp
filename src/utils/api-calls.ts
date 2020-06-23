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

export const callWeatherAPI = async (): Promise<any> => {
  return await api.get(`data/2.5/forecast`, {
    params: {
      q: "London",
      appid: userId,
      units: "metric",
    },
  });
};
