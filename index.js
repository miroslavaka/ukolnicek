console.log('funguju!');

import { Task } from './Task/index.js';
import { Header } from './Header/index.js';

const tasks = document.querySelector('.todo__tasks');

//header
const header = document.querySelector('.todo__header');
const d = new Date();
console.log(d);
const monthName = [
  'leden',
  'únor',
  'březen',
  'duben',
  'květen',
  'červen',
  'červenec',
  'srpen',
  'září',
  'říjen',
  'listopad',
  'prosinec',
];
const dayName = [
  'neděle',
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
];
header.innerHTML += Header({
  day: d.getDate(),
  month: monthName[d.getMonth() + 1].substring(0, 3),
  year: d.getFullYear(),
  nameday: dayName[d.getDay()],
});

//fetch data
const fetchAllData = () => {
  const url = 'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderTasks(data);
    });
};

window.onload = fetchAllData();

//seznam ukolu a zobrazeni ukolu na stranke
const renderTasks = (data) => {
  tasks.innerHTML = data.map((item) => Task(item)).join('');
};

//checkbox "Pouze nesplnene"
let checkbox = document.querySelector('#checkbox-undone');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    console.log('checked');
    fetch(
      'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false',
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        renderTasks(data);
      });
  } else {
    console.log('unchecked');
    fetchAllData();
  }
});
