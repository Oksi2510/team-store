import ElementHtml from '../../utility/element-html';
import './header.css';
import { applyTheme, THEME_STORAGE_KEY, getInitialTheme, toggleTheme } from '../../services/theme';

export default function createHeader(): HTMLElement {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const header = new ElementHtml('header', 'header');
  const container = new ElementHtml('div', ['container', 'header-container']);

  let currentTheme = getInitialTheme(storedTheme, prefersDark);

  applyTheme(currentTheme);

  const logo = new ElementHtml('a', 'header__logo', 'Мемопедия');
  logo.getHtmlElement().href = '#/about';

  const navigation = new ElementHtml('nav', 'header__navigation');

  const themeButton = new ElementHtml('button', 'theme-toggle');

  const catalogLink = new ElementHtml('a', 'header__link', 'Каталог');
  const favoritesLink = new ElementHtml('a', 'header__link', 'Избранное');
  const aboutLink = new ElementHtml('a', 'header__link', 'О нас');

  aboutLink.getHtmlElement().href = '#/about';
  catalogLink.getHtmlElement().href = '#/catalog';
  favoritesLink.getHtmlElement().href = '#/favorites';

  navigation.appendChildNode(catalogLink);
  navigation.appendChildNode(favoritesLink);
  navigation.appendChildNode(aboutLink);

  themeButton.getHtmlElement().type = 'button';
  themeButton.getHtmlElement().textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeButton.getHtmlElement().setAttribute('aria-label', 'Сменить тему');

  themeButton.addEventListener('click', () => {
    currentTheme = toggleTheme(currentTheme);
    applyTheme(currentTheme);
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);

    themeButton.setTextContent(currentTheme === 'dark' ? '☀️' : '🌙');
  });

  header.appendChildNode(container);
  container.appendChildNode(logo);
  container.appendChildNode(navigation);
  container.appendChildNode(themeButton);

  return header.getHtmlElement();
}
