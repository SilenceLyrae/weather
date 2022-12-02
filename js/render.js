import { ELEMENT } from './ui.js';
import { EXTRA_VARIABLE, WEATHER_CONDITION, SRC_IMG } from './data.js';
import { getWeatherData } from './weather.js';
import { favoritesList } from './favorites.js';

const render = () => {
  ELEMENT.FAVORITES_LIST.replaceChildren();
  favoritesList.forEach((city) => createFavoriteCity(city));
};

const createFavoriteCity = (city) => {
  const cityWrapper = document.createElement('li');
  cityWrapper.textContent = city;
  cityWrapper.className = 'city';
  ELEMENT.FAVORITES_LIST.append(cityWrapper);
  cityWrapper.addEventListener('click', () => {
    getWeatherData(city);
  });
};

const updateCityName = (cityName) => {
  ELEMENT.ACTIVE_CITY_LIST.forEach((element) => {
    element.textContent = cityName;
  });
  if (favoritesList.includes(cityName)) {
    ELEMENT.LIKE.src = SRC_IMG.BLACK_HEART;
  } else {
    ELEMENT.LIKE.src = SRC_IMG.HEART;
  }
};

const updateTemperature = (temperature, feelsLike) => {
  ELEMENT.TEMPERATURE.forEach((element) => {
    element.textContent = temperature + EXTRA_VARIABLE.DEGREE_SYMBOL;
  });
  ELEMENT.FEELS_LIKE.textContent = feelsLike + EXTRA_VARIABLE.DEGREE_SYMBOL;
};

const updateWeatherCondition = (weather) => {
  const condition = weather[0].main;
  WEATHER_CONDITION.forEach((object) => {
    object.condition.forEach((element) => {
      if (element === condition) {
        ELEMENT.ICON.src = object.src;
        ELEMENT.CURRENT_CONDITION.textContent = condition;
      }
    });
  });
};

const updateTimeDetails = (sunriseTime, sunsetTime) => {
  ELEMENT.SUNRISE.textContent = sunriseTime;
  ELEMENT.SUNSET.textContent = sunsetTime;
};

export {
  updateTemperature,
  updateWeatherCondition,
  updateCityName,
  updateTimeDetails,
  render,
};
