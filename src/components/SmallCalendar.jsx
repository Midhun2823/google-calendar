import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { getMonth, getYear } from "../util";
import GlobalContext from "../context/GlobalContext";

const SmallCalendar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentYearIndex, setCurrentYearIndex] = useState(dayjs().year());
  const [currentYear, setCurrentYear] = useState(getYear());
  const [currentDay, setCurrentDay] = useState(dayjs());

  function handlePreviousMonth() {
    setCurrentMonthIndex(currentMonthIndex - 1);
    if (currentMonthIndex === 0) {
      setCurrentYearIndex(currentYearIndex - 1);
      setCurrentMonthIndex(11); // Wrap around to December of previous year
    }
  }

  function handleNextMonth() {
    setCurrentMonthIndex(currentMonthIndex + 1);
    if (currentMonthIndex === 11) {
      setCurrentYearIndex(currentYearIndex + 1);
      setCurrentMonthIndex(0); // Wrap around to January of next year
    }
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const selectDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-primary rounded-circle p-2 text-light";
    } else if (selectDay === currDay) {
      return "bg-primary bg-opacity-25 rounded-circle p-2 text-primary fw-bold";
    }
  }

  const {
    monthIndex,
    setSmallCalendarMonth,
    daySelected,
    setDaySelected,
    setSmallCalendarYear,
    yearIndex,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex, currentYearIndex));
    setCurrentYear(getYear(currentYearIndex));
  }, [currentMonthIndex, currentYearIndex]);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
    setCurrentYearIndex(yearIndex);
    setCurrentDay(daySelected || dayjs());
  }, [monthIndex, yearIndex, daySelected]);
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <p className="flex-grow-1 pt-2 fs-5 lead fw-semibold">
          {dayjs(new Date(currentYearIndex, currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <div className="ms-4 ">
          <button className="btn rounded-circle" onClick={handlePreviousMonth}>
            <span class="material-icons-outlined cursor-pointer mt-1">
              chevron_left
            </span>
          </button>
          <button className="btn rounded-circle" onClick={handleNextMonth}>
            <span class="material-icons-outlined cursor-pointer mt-1">
              chevron_right
            </span>
          </button>
        </div>
      </div>
      <div>
        {" "}
        <span className="row">
          {currentMonth[0].map((day, i) => (
            <span key={i} className="col text-center">
              {day.format("dd").charAt(0)}
            </span>
          ))}{" "}
        </span>
        {currentMonth.map((row, i) => (
          <div className="row " key={i}>
            {row.map((day, idx) => (
              <button
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIndex);
                  setSmallCalendarYear(currentYearIndex);
                  setDaySelected(day);
                }}
                className={`btn border rounded-circle text-center p-2 m-1 col border ${getDayClass(
                  day
                )}`}
                key={idx}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
