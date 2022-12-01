import { UI_ELEMENT } from './ui.js';
import { EXTRA_VARIABLE, WEATHER_CONDITION, SRC_IMG } from './constants.js';
import { getWeatherData } from './weather.js';
import { favoritesList } from './favorites.js';

const updateCityName = (cityName) => {
  UI_ELEMENT.ACTIVE_CITY_LIST.forEach((element) => {
    element.textContent = cityName;
  });
  if (favoritesList.includes(cityName)) {
    UI_ELEMENT.LIKE.src = SRC_IMG.BLACK_HEART;
  } else {
    UI_ELEMENT.LIKE.src = SRC_IMG.HEART;
  }
};

const updateTemperature = (temperature, feelsLike) => {
  UI_ELEMENT.TEMPERATURE.forEach((element) => {
    element.textContent = temperature + EXTRA_VARIABLE.DEGREE_SYMBOL;
  });
  UI_ELEMENT.FEELS_LIKE.textContent = feelsLike + EXTRA_VARIABLE.DEGREE_SYMBOL;
};

const updateWeatherCondition = (weather) => {
  const condition = weather[0].main;
  WEATHER_CONDITION.forEach((object) => {
    object.condition.forEach((element) => {
      if (element === condition) {
        UI_ELEMENT.ICON.src = object.src;
        UI_ELEMENT.CURRENT_CONDITION.textContent = condition;
      }
    });
  });
};

const updateTimeDetails = (sunriseTime, sunsetTime) => {
  UI_ELEMENT.SUNRISE.textContent = sunriseTime;
  UI_ELEMENT.SUNSET.textContent = sunsetTime;
};

const render = () => {
  UI_ELEMENT.FAVORITES_LIST.replaceChildren();
  favoritesList.forEach((city) => createFavoriteCity(city));
};

const createFavoriteCity = (city) => {
  const cityWrapper = document.createElement('li');
  cityWrapper.textContent = city;
  cityWrapper.className = 'city';
  UI_ELEMENT.FAVORITES_LIST.append(cityWrapper);
  cityWrapper.addEventListener('click', () => {
    getWeatherData(city);
  });
};

export {
  updateTemperature,
  updateWeatherCondition,
  updateCityName,
  updateTimeDetails,
  render,
};
