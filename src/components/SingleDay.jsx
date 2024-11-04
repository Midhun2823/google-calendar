import React from "react";

const SingleDay = ({ currentDate }) => {
  
  return (
    <div>
      <div className="container-fluid  p-4">
        <h2>{currentDate.format("ddd")}</h2>
        <h1>{currentDate.format("DD")}</h1>
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
    </div>
  );
};

export default SingleDay;
