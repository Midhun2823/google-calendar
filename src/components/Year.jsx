import React from 'react'
import Month from './Month';
import dayjs from 'dayjs';

const Year = ({year}) => {
  // const year = Array.from({ length: 12 }, (_, i) => month(i));
  return (
    <div className="container-fluid">
      <div className="row">
        {year.map((month, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <h5 className="text-center">{dayjs().month(i).format("MMMM")}</h5>
            <Month month={month} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Year
