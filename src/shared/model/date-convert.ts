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

  const daysOfWeekMin = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  const minMonths = ['дек', "янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя"]

  const dateFormat = Date.parse(date);
  const newDate = new Date(dateFormat);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const week = daysOfWeek[newDate.getDay()];
  const weekMin = daysOfWeekMin[newDate.getDay()];
  const minMonth = minMonths[newDate.getMonth()];

  const editMinutes = minutes < 10 ? '0' + minutes : minutes;
  const editHours = hours < 10 ? '0' + hours : hours;
  const editMonth = month < 10 ? '0' + month : month;
  const editDay = day < 10 ? '0' + day : day;

  const finalDate = `${week} ${editDay}.${editMonth}.${year} ${editHours}:${editMinutes}`;
  const onlyDate = `${week} ${editDay}.${editMonth}.${year}`;
  const time = `${editHours}:${editMinutes}`;
  const dateWithMinWeek = `${day}.${editMonth} ${weekMin}`;
  const dateWithMinWeekNew = `${editDay} ${minMonth} ${weekMin}`;

  const dateConvert = {
    editMinutes,
    editHours,
    editMonth,
    editDay,
    finalDate,
    year,
    week,
    onlyDate,
    time,
    dateWithMinWeek,
    dateWithMinWeekNew
  };

  return dateConvert;
};
