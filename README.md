# Weather app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />

This project uses the API from [OpenWeather](https://openweathermap.org/api).<br />
Please create a file called .env.local. In this file add "REACT_APP_OPENWEATHER_API=" and enter your API key. Restart the server, it should fetch the data now.

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Assumptions

The API returns a list of weather information for 5 days every 3 hours with the endpoint "forecast".<br />
The project uses this endpoint to display the list of day forecasts.<br />
I will display for each day only the weather for the hours between 12 pm - 3 pm.<br />

The API returns current information about a city with the endpoint "weather".<br />
The project uses this endpoint in order to display the temperature in the header. This is the actual temperature for this time in London.<br />

Every second, the counter is decreasing, updating the progress bar. Additionally, the clock on top refreshes.<br />
Every minute, the counter resets to 60s, the progress bar returns to its initial position and the data is fetched from the API for the two endpoints.

## Improvements to do

If I had more time, I will probably add a loading state, the time the app fetches the information from the API and an error notification in case it fails.<br />
