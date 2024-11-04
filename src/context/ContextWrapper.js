import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());

    const [yearIndex, setYearIndex] = useState(dayjs().year());
     const [smallCalendarYear, setSmallCalendarYear] = useState(dayjs().year());

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
    if (smallCalendarYear !== null) {
      setYearIndex(smallCalendarYear);
    }
  }, [smallCalendarMonth, smallCalendarYear]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,

        yearIndex,
        setYearIndex,
        smallCalendarYear,
        setSmallCalendarYear,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
