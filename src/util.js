import dayjs from "dayjs";

export function getMonth(
  month = dayjs().month(),
  year = dayjs().year(),
  currentMonthCount
) {
  // month is between 0 - 11

  month = Math.floor(month);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); // if in the place of 1 we keep -1 means the meaning of that is it represent the last date of previous monthe if we keep 44 means after continuing of the present month it goes to next month for suppose present month has 31 daya and it goes to next month of date 13
  currentMonthCount = 0 - firstDayOfTheMonth;

  // In Google Calendar there are 5 rows and 7 columns
  const daysMatrix = new Array(5).fill([]).map(() => {
    // 5 rows are filled with empty arrays each
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getYear(year = dayjs().year()) {
    year = Math.floor(year);
  const monthsMatrix = new Array(12).fill([]).map((_, month) => {
    // Each month is a 5x7 matrix similar to the `getMonth` function
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;

    const daysMatrix = new Array(5).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
        currentMonthCount++;
        return dayjs(new Date(year, month, currentMonthCount));
      });
    });

    return daysMatrix;
  });

  return monthsMatrix;
}
