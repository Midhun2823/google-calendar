import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const FourDays = ({ currentDate, setViews }) => {
  const fourDays = Array.from({ length: 4 }, (_, i) =>
    dayjs(currentDate).add(i, "day")
  );

  
  const [currentday, setCurrentDay] = useState(dayjs());

  const { daySelected, setDaySelected } = useContext(GlobalContext);

  // useEffect(() => {
  //   setDaySelected(currentDate);
  // }, [daySelected]);

  return (
    <div className="container-fluid">
      <div className="row">
        {fourDays.map((day, idx) => (
          <div key={idx} className="col text-center p-4">
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
      </div>{" "}
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

export default FourDays;
