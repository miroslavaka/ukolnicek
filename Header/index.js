export const Header = (props) => {
  const { day, month, year, weekday } = props;
  return `
  <div class="date">
    <div class="date__daynum">${day}</div>
    <div class="date__monthyear">
     <div class="date__month">${month}</div>
      <div class="date__year">${year}</div>
    </div>
    <div class="date__day">${weekday}</div>
  </div>
  `;
};
