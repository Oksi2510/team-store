import './style.css';
import createHeader from './components/header/header';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found');
}

app.append(createHeader());
