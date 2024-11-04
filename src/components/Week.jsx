import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const Week = ({ currentDate, setViews }) => {
  const startOfWeek = currentDate.startOf("week");

  // Generate an array of the 7 days in the current week
  const weekDays = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.add(i, "day")
  );
  const [currentday, setCurrentDay] = useState(dayjs());

  const { daySelected, setDaySelected } = useContext(GlobalContext);
    console.log(daySelected.format("DD-MM-YYY") + " Week")

  // useEffect(() => {
  //   setDaySelected(currentDate);
  //   console.log(daySelected.format("DD-MM-YYY") + " Week")
  // }, [daySelected]);

  return (
    <div className="container-fluid">
      <div className="row">
        {weekDays.map((day, idx) => (
          <div key={idx} className="col  text-center p-4">
            <Link
              className="nav-link"
              to={"/Day"}
              onClick={() => {
                setCurrentDay(day);
                setDaySelected(day);
                setViews("Day");
              }}
            >
              <h2>{day.format("ddd")}</h2>
              <h1>{day.format("DD")}</h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <span>GMT+05:30</span> <hr />
        {[...Array(24).keys()].map((hour) => (
          <div key={hour} className="time-slot">
            <span className="time">
              {hour % 12 === 0 ? 12 : hour % 12} {hour < 12 ? "AM" : "PM"}
            </span>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;
