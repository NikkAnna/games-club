export const date = (date: string) => {
  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

  const dateFormat = Date.parse(date);
  const newDate = new Date(dateFormat);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const week = daysOfWeek[newDate.getDay()];

  const editMinutes = minutes < 10 ? '0' + minutes : minutes;
  const editHours = hours < 10 ? '0' + hours : hours;
  const editMonth = month < 10 ? '0' + month : month;
  const editDay = day < 10 ? '0' + day : day;

  const finalDate = `${week} ${editDay}.${editMonth}.${year} ${editHours}:${editMinutes}`;

  const dateConvert = {
    editMinutes,
    editHours,
    editMonth,
    editDay,
    finalDate,
    year,
    week
  };

  return dateConvert;
};
