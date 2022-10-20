console.log('funguju!');

import { Task } from './Task/index.js';

//seznam ukolu
const renderTasks = (data) => {
  const tasks = document.querySelector('.todo__tasks');
  tasks.innerHTML = data.map((item) => Task(item)).join('');
};

//fetch data
const url = 'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderTasks(data);
  });
