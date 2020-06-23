/**
 * All interfaces of the app
 */
export interface IForecast {
  day: string;
  temperature: number;
  desc: string;
  icon: string;
}

export interface IPropsHeader {
  forecast: IForecast[];
  counter: number;
  time: string;
}

export interface IPropsList {
  forecast: IForecast[];
}
