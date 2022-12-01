import { SERVER, SRC_IMG } from './constants.js';
import { UI_ELEMENT, UI_CLASS } from './ui.js';
import { render } from './render.js';

const storage = {
  saveFavoritesList: function (favoritesList) {
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  },
  saveCurrentCity: function (currentCity) {
    localStorage.setItem('currentCity', currentCity);
  },
  getFavoritesList: function () {
    return JSON.parse(localStorage.getItem('favoritesList'));
  },
  getCurrentCity: function () {
    return localStorage.getItem('currentCity');
  },
};

let favoritesList = storage.getFavoritesList() || [];
let currentCity = storage.getCurrentCity() || SERVER.START_CITY;

function changeFavoritesList() {
  const cityName = UI_ELEMENT.ACTIVE_CITY.textContent;
  if (!favoritesList.includes(cityName)) {
    favoritesList = favoritesList.concat(cityName);
    UI_ELEMENT.LIKE.src = SRC_IMG.BLACK_HEART;
    UI_ELEMENT.LIKE.classList.add(UI_CLASS.ACTIVE_LIKE);
  } else {
    favoritesList = favoritesList.filter((city) => {
      UI_ELEMENT.LIKE.src = SRC_IMG.HEART;
      UI_ELEMENT.LIKE.classList.remove(UI_CLASS.ACTIVE_LIKE);
      return city !== cityName;
    });
  }
  storage.saveFavoritesList(favoritesList);
  render();
}

export { currentCity, favoritesList, changeFavoritesList, storage };
