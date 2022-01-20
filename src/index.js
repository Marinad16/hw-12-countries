// import fetchCountries from "./js/fetchCountries";
const _ = require('lodash');
import './sass/main.scss';
import './js/theme';
import countriesTemplate from './templates/countries.hbs';
import countriesTemplateList from './templates/countries-list.hbs';

import { alert } from '../node_modules/@pnotify/core/dist/PNotify.js';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchInput: document.querySelector('.js-search-input'),
};

const fetchCountries = _.debounce(event => {
  event.preventDefault();

  const inputValue = event.target.value;

  if (inputValue != null && inputValue != '') {
    const url = `https://restcountries.com/v2/name/${inputValue}`;
    refs.countriesContainer.innerHTML = '';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length != undefined) {
          if (data.length == 1) {
            const markup = countriesTemplate(data);
            refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
            return;
          }
          if (data.length > 1 && data.length <= 15) {
            const listMarkup = countriesTemplateList(data);
            refs.countriesContainer.insertAdjacentHTML('beforeend', listMarkup);
            return;
          }
          if (data.length > 15) {
            alert({
              text: 'Too many matches found. Please enter a more specific query!',
            });
            return;
          }
        }
        refs.countriesContainer.innerHTML = '';
        return;
      });
  }

  refs.countriesContainer.innerHTML = '';
}, 500);

refs.searchInput.addEventListener('input', fetchCountries);
