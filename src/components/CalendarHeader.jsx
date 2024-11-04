import React, { useContext, useEffect } from "react";
import Calendar_Icon from "../assets/Calendar_Icon.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const CalendarHeader = (props) => {
  const views = ["Day", "Week", "Month", "Year", "Schedule", "4Days"];

  const {
    monthIndex,
    setMonthIndex,
    yearIndex,
    setYearIndex,
    daySelected,
    setDaySelected,
  } = useContext(GlobalContext);

  function handlePrevious() {
    if (props.views === "Year") {
      setYearIndex(yearIndex - 1);
    } else if (props.views === "Week") {
      const newDay = daySelected.subtract(7, "day");
      if (!daySelected.isSame(newDay, "day")) {
        setDaySelected(newDay);
        setMonthIndex(newDay.month());
        if (newDay.year() !== yearIndex) {
          setYearIndex(newDay.year());
        }
      }
    } else if (props.views === "4Days") {
      const newDay = daySelected.subtract(4, "day");
      if (!daySelected.isSame(newDay, "day")) {
        setDaySelected(newDay);
        setMonthIndex(newDay.month());
        if (newDay.year() !== yearIndex) {
          setYearIndex(newDay.year());
        }
      }
    } else if (props.views === "Day") {
      const newDay = daySelected.subtract(1, "day");
      if (!daySelected.isSame(newDay, "day")) {
        setDaySelected(newDay);
        setMonthIndex(newDay.month());
        if (newDay.year() !== yearIndex) {
          setYearIndex(newDay.year());
        }
      }
    } else {
      setMonthIndex(monthIndex - 1);
    }
  }

  function handleNext() {
    if (props.views === "Year") {
      setYearIndex(yearIndex + 1);
    } else if (props.views === "Week") {
      const newDay = daySelected.add(7, "day");
      if (!daySelected.isSame(newDay, "day")) {
        setDaySelected(newDay);
        setMonthIndex(newDay.month());
        if (newDay.year() !== yearIndex) {
          setYearIndex(newDay.year());
        }
      }
    } else if (props.views === "4Days") {
      const newDay = daySelected.add(4, "day");
      if (!daySelected.isSame(newDay, "day")) {
        setDaySelected(newDay);
        setMonthIndex(newDay.month());
        if (newDay.year() !== yearIndex) {
          setYearIndex(newDay.year());
        }
      }
    } else if (props.views === "Day") {
      const newDay = daySelected.add(1, "day");
      if (!daySelected.isSame(newDay, "day")) {
        setDaySelected(newDay);
        setMonthIndex(newDay.month());
        if (newDay.year() !== yearIndex) {
          setYearIndex(newDay.year());
        }
      }
    } else {
      setMonthIndex(monthIndex + 1);
    }
  }

  function handleResetMonth() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
    setYearIndex(
      yearIndex === dayjs().year() ? yearIndex + Math.random() : dayjs().year()
    );
    setDaySelected(dayjs());
  }

  return (
    <header className="container-fluid p-2 d-flex">
      <div className="flex-grow-1 d-flex">
        <img
          src={Calendar_Icon}
          alt="Calendar_Icon"
          width={36}
          height={36}
          className="m-2"
        />
        <h3 className="pt-2  ">Calendar</h3>
        <div className="ms-5 pt-1">
          <button
            onClick={handleResetMonth}
            className="btn border-dark rounded-pill btn-outline-light text-dark px-4 py-2"
          >
            Today
          </button>
        </div>
        <div className="ms-4 mt-2">
          <button className="btn rounded-circle" onClick={handlePrevious}>
            <span class="material-icons-outlined cursor-pointer mt-1">
              chevron_left
            </span>
          </button>
          <button className="btn rounded-circle" onClick={handleNext}>
            <span class="material-icons-outlined cursor-pointer mt-1">
              chevron_right
            </span>
          </button>
        </div>
        <p className="fw-semibold fs-3 ms-3 pt-2">
          {props.views === "Year"
            ? `${dayjs(new Date(yearIndex, monthIndex)).format("YYYY")}`
            : `${dayjs(new Date(yearIndex, monthIndex)).format("MMMM YYYY")}`}
        </p>
      </div>
      <div className="ms-5 pt-1 ">
        <div class="btn-group">
          {" "}
          <button
            type="button"
            className="btn border-dark rounded-pill btn-outline-light text-dark dropdown-toggle  px-4 py-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.views}
          </button>
          <ul class="dropdown-menu">
            {views.map((view) => (
              <li>
                <Link
                  to={`/${view}`}
                  className="nav-link"
                  onClick={() => props.setViews(view)}
                >
                  {" "}
                  <div class="dropdown-item">
                    <span>{view}</span>
                    <span className="float-end">
                      {view.slice(0, 1).toUpperCase()}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default CalendarHeader;
