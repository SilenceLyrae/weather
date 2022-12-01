const UI_ELEMENT = {
  BUTTONS_WRAPPER: document.querySelector('.tab-wrapper-btn'),
  BUTTONS: document.querySelectorAll('.tab-btn'),
  TABS_WEATHER: document.querySelectorAll('.tab'),
  TAB_NOW: document.querySelector('.now-tab'),
  TAB_DETAILS: document.querySelector('.details-tab'),
  TAB_FORECAST: document.querySelector('.forecast-tab'),
  FORM: document.querySelector('form'),
  LIKE: document.querySelector('.like'),
  SEARCH_CITY: document.querySelector('.search'),
  ACTIVE_CITY_LIST: document.querySelectorAll('[class*="active-city"]'),
  TEMPERATURE: document.querySelectorAll('.temperature'),
  FEELS_LIKE: document.querySelector('.feels-like'),
  ICON: document.querySelector('.icon'),
  CURRENT_CONDITION: document.querySelector('.current-condition'),
  SUNRISE: document.querySelector('.time-sunrise'),
  SUNSET: document.querySelector('.time-sunset'),
  ACTIVE_CITY: document.querySelector('.active-city'),
  FAVORITES_LIST: document.querySelector('.city-list-wrapper'),
  FAVORITE_CITIES: document.querySelectorAll('.city'),
};

const UI_CLASS = {
  ACTIVE_BTN: 'active-btn',
  ACTIVE_TAB: 'active-tab',
  INACTIVE_TAB: 'inactive-tab',
  ACTIVE_LIKE: 'active-like',
};

export { UI_ELEMENT, UI_CLASS };
