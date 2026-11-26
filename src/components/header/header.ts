import ElementHtml from '../../utility/element-html';
import './header.css';

export default function createHeader(): HTMLElement {
  const header = new ElementHtml('header', 'header');

  const logo = new ElementHtml('a', 'header__logo', 'Мемопедия');
  logo.getHtmlElement().href = '#/about';

  const navigation = new ElementHtml('nav', 'header__navigation');

  const aboutLink = new ElementHtml('a', 'header__link', 'About');
  const catalogLink = new ElementHtml('a', 'header__link', 'Catalog');
  const favoritesLink = new ElementHtml('a', 'header__link', 'Favorites');

  aboutLink.getHtmlElement().href = '#/about';
  catalogLink.getHtmlElement().href = '#/catalog';
  favoritesLink.getHtmlElement().href = '#/favorites';

  navigation.appendChildNode(aboutLink);
  navigation.appendChildNode(catalogLink);
  navigation.appendChildNode(favoritesLink);

  header.appendChildNode(logo);
  header.appendChildNode(navigation);

  return header.getHtmlElement();
}
