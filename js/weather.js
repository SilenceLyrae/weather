import { UI_ELEMENT, UI_CLASS } from './ui.js';
import { parsing } from './conversion.js';
import { SERVER, ERROR } from './constants.js';
import { render } from './render.js';
import {
  changeFavoritesList,
  favoritesList,
  currentCity,
} from './favorites.js';

UI_ELEMENT.FORM.addEventListener('submit', handleSendingData);
UI_ELEMENT.LIKE.addEventListener('click', changeFavoritesList);
document.addEventListener('DOMContentLoaded', () => {
  getWeatherData(currentCity);
  favoritesList === ERROR.EMPTY_VALUE || render();
});
for (let btn of UI_ELEMENT.BUTTONS) {
  btn.addEventListener('click', changeActiveBtn);
}

function handleSendingData(event) {
  event.preventDefault();
  const cityName = event.target.city.value;
  cityName === ERROR.EMPTY_VALUE || getWeatherData(cityName);
  this.reset();
}

function getWeatherData(cityName) {
  const url = `${SERVER.URL}?q=${cityName}&appid=${SERVER.API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.name === undefined) {
        throw new Error(ERROR.INCORRECT_CITY);
      }
      parsing(data);
    })
    .catch((error) => {
      switch (error.message) {
        case ERROR.FAILED_FETCH:
          console.log(ERROR.NOT_RESPONDING);
          break;
        default:
          console.log(`${error}`);
      }
    });
}

function changeActiveBtn(event) {
  const btnClicked = event.target;
  UI_ELEMENT.BUTTONS.forEach((btn) => {
    if (btnClicked !== btn && btn.classList.contains(UI_CLASS.ACTIVE_BTN)) {
      btn.classList.remove(UI_CLASS.ACTIVE_BTN);
    }
  });
  btnClicked.classList.contains(UI_CLASS.ACTIVE_BTN) ||
    btnClicked.classList.add(UI_CLASS.ACTIVE_BTN) + changeTabView(btnClicked);
}

const changeTabView = (btnClicked) => {
  const tabBtn = btnClicked.dataset.tab;
  UI_ELEMENT.TABS_WEATHER.forEach((element) => {
    const tab = element.dataset.tab;
    switch (tab) {
      case tabBtn:
        element.classList.contains(UI_CLASS.ACTIVE_TAB) ||
          element.classList.add(UI_CLASS.ACTIVE_TAB) +
            element.classList.remove(UI_CLASS.INACTIVE_TAB);
        break;
      default:
        element.classList.contains(UI_CLASS.INACTIVE_TAB) ||
          element.classList.add(UI_CLASS.INACTIVE_TAB) +
            element.classList.remove(UI_CLASS.ACTIVE_TAB);
        break;
    }
  });
};

export { favoritesList, getWeatherData };
