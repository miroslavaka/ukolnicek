console.log('funguju!');

//komponenta pro jeden ukol
const Task = (props) => {
  return `
<div class="task">
<div class="task__body">
  <div class="task__name">${props.name}</div>
  <div class="task__due">${props.due}</div>
</div>
<div class="task__done">
${props.done === true ? '✓' : ''}
</div>
</div>
`;
};

//seznam ukolu
const renderTasks = (data) => {
  const tasks = document.querySelector('.todo__tasks');
  tasks.innerHTML = data.map((item) => Task(item));
};

//fetch data
const url = 'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    renderTasks(data);
  });
