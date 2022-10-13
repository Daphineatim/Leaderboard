import './style.css';
import { addScore, refresh } from '../modules/addScore.js';

addScore();
refresh();

document.getElementById('refresh').addEventListener('click', () => {
  refresh();
});