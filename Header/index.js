export const Header = (props) => {
  return `
  <div class="date">
    <div class="date__daynum">${props.day}</div>
    <div class="date__monthyear">
     <div class="date__month">${props.month}</div>
      <div class="date__year">${props.year}</div>
    </div>
    <div class="date__day">${props.nameday}</div>
  </div>
  `;
};
