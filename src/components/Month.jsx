import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div className="container-fluid">
      <div className="">
        {month.map((row, i) => (
          <div className="row " key={i}>
            {row.map((day, idx) => (
              <div className="col border">
                <Day day={day} key={idx} rowindex={i} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Month;
