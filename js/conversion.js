import { EXTRA_VARIABLE, ERROR } from './data.js';
import { storage } from './favorites.js';
import {
  updateCityName,
  updateTemperature,
  updateWeatherCondition,
  updateTimeDetails,
} from './render.js';

const parsing = ({ name, main, weather, sys }) => {
  updateCityName(name);
  storage.saveCurrentCity(name);
  updateWeatherCondition(weather);

  const temperatureKelvin = main.temp;
  const feelsLikeKelvin = main.feels_like;
  const temperatureCelsius = convertKelvinToCelsius(temperatureKelvin);
  const feelsLikeCelsius = convertKelvinToCelsius(feelsLikeKelvin);

  updateTemperature(temperatureCelsius, feelsLikeCelsius);

  const sunriseUnix = sys.sunrise;
  const sunsetUnix = sys.sunset;
  const sunriseTime = convertUnixToTime(sunriseUnix);
  const sunsetTime = convertUnixToTime(sunsetUnix);

  updateTimeDetails(sunriseTime, sunsetTime);
};

const convertKelvinToCelsius = (temperature) => {
  try {
    if (isNaN(temperature)) throw new Error(ERROR.NaN);
    return (temperature + EXTRA_VARIABLE.ABSOLUTE_ZERO).toFixed(0);
  } catch (error) {
    console.log(error.message);
  }
};

const convertUnixToTime = (dateUnix) => {
  try {
    if (isNaN(dateUnix)) throw new Error(ERROR.NaN);
    const date = new Date(dateUnix * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const padTo2Digits = (number) => number.toString().padStart(2, '0');
    const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    return time;
  } catch (error) {
    console.log(error.message);
  }
};

export { parsing };
