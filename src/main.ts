import './style.css';
import { applyTheme, THEME_STORAGE_KEY, getInitialTheme } from './theme';

const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = getInitialTheme(storedTheme, prefersDark);

applyTheme(theme);
