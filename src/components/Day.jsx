import React from "react";
import dayjs from "dayjs"

const Day = ({ day, rowindex }) => {

    const getOnClickDay = () =>{
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
          ? "bg-primary rounded-circle p-2 text-light"
          : "";
    }

  return (
    <div className="">
      <div className=" text-center pb-5 p-2 mb-4">
        {rowindex === 0 ? (
          <p className=" ">{day.format("ddd").toUpperCase()}</p>
        ) : (
          "" 
        )}
        <span className={` ${getOnClickDay()}`}>{day.format("DD")}</span>
      </div>
    </div>
  );
};

export default Day;
