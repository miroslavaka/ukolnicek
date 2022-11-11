console.log('funguju!');

import { Task } from './Task/index.js';
import { Header } from './Header/index.js';

const tasks = document.querySelector('.todo__tasks');

const header = document.querySelector('.todo__header');
const dateNow = new Date();

let year = dateNow.toLocaleDateString('cs-CS', { year: 'numeric' });
let month = dateNow.toLocaleDateString('cs-CS', { month: 'long' });
let day = dateNow.toLocaleDateString('cs-CS', { day: 'numeric' });
let weekday = dateNow.toLocaleDateString('cs-CS', { weekday: 'long' });

header.innerHTML += Header({
  day,
  month: month.substring(0, 3),
  year,
  weekday,
});

const url = 'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks';
const urlNotDone =
  'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false';

const fetchAllData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderTasks(data));
};

window.onload = fetchAllData(url);

const renderTasks = (data) => {
  tasks.innerHTML = data.map((item) => Task(item)).join('');
};

let checkbox = document.querySelector('#checkbox-undone');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    fetchAllData(urlNotDone);
  } else {
    fetchAllData(url);
  }
});
