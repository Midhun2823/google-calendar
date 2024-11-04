import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (index) => {},

  yearIndex: 0,
  setYearIndex: (index) => {},
  smallCalendarYear: 0,
  setSmallCalendarYear: (index) => {},
});

export default GlobalContext;
