
const refs = {
  switchControl: document.querySelector('#theme-switch-toggle'),
  theme: document.querySelector('body'),
  logo: document.getElementById('logo'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchControl.addEventListener('change', onChange);

function onChange(event) {
  event.currentTarget.checked ? checked() : notChecked();
}

function checked() {
  refs.theme.classList.remove(Theme.LIGHT);
  refs.theme.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  refs.switchControl.checked = true;
  refs.logo.src = require('../images/white-logo-small.png');
}

function notChecked() {
  refs.theme.classList.remove(Theme.DARK);
  refs.theme.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
  refs.switchControl.checked = false;
  refs.logo.src = require('../images/black-logo-small.png');
}

function savedTheme() {
  const savedTheme = localStorage.getItem('theme');

  savedTheme === Theme.LIGHT ? notChecked() : checked();
}

savedTheme();
