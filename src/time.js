export function createTodayDate() {
  const dateNow = new Date();

  return dateNow;
}

export function createWeekDate() {
  const dateNow = new Date();

  dateNow.setDate(dateNow.getDate() + 7);
  const weekFromNow = dateNow;

  return weekFromNow;
}

export function createMonthDate() {
  const dateNow = new Date();

  const month = dateNow.getMonth();

  return month;
}

export function createYearDate() {}
