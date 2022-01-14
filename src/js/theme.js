const refs = {
  switchControl: document.querySelector('#theme-switch-toggle'),
  theme: document.querySelector('body'),
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
}

function notChecked() {
  refs.theme.classList.remove(Theme.DARK);
  refs.theme.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
  refs.switchControl.checked = false;
}

function savedTheme() {
  const savedTheme = localStorage.getItem('theme');

  savedTheme === Theme.LIGHT ? notChecked() : checked();
}

savedTheme();
