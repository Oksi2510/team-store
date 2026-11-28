import './style.css';
import createHeader from './components/header/header';
import createCatalog from './components/catalog/catalog';

const header = document.querySelector<HTMLDivElement>('#head');
const app = document.querySelector<HTMLDivElement>('#app');
const footer = document.querySelector<HTMLDivElement>('#footer');

if (!header) {
  throw new Error('Header root not found');
}
if (!app) {
  throw new Error('App root not found');
}
if (!footer) {
  throw new Error('Footer root not found');
}

header.append(createHeader());
app.append(createCatalog().element);
