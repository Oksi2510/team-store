import './style.css';
import { applyTheme, THEME_STORAGE_KEY, getInitialTheme, toggleTheme } from './theme';
import ElementHtml from './utility/element-html';

const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = getInitialTheme(storedTheme, prefersDark);

applyTheme(currentTheme);

const themeButton = new ElementHtml('button', 'theme-toggle', 'Сменить тему');

themeButton.addEventListener('click', () => {
  currentTheme = toggleTheme(currentTheme);
  applyTheme(currentTheme);
  localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
});

document.body.append(themeButton.getHtmlElement());
