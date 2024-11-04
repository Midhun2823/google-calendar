import { useContext, useEffect, useState } from "react";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth, getYear } from "./util";
import GlobalContext from "./context/GlobalContext";
import Week from "./components/Week";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Year from "./components/Year";
import SingleDay from "./components/SingleDay";
import FourDays from "./components/FourDays";
import dayjs from "dayjs";

function App() {
  // console.table("A" + getMonth());
  // console.table("Year " + getYear());

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, yearIndex, daySelected } = useContext(GlobalContext);
  const [views, setViews] = useState("Month");

  const [currentYear, setCurrentYear] = useState(getYear());

  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex, yearIndex));
    setCurrentYear(getYear(yearIndex));
    console.log(daySelected + " APP");
    setCurrentDate(daySelected);
  }, [monthIndex, yearIndex, daySelected]);

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <div className="container-fluid">
          <CalendarHeader
            views={views}
            setViews={setViews}
            currentDate={currentDate}
          />
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Routes>
                <Route path="/" element={<Month month={currentMonth} />} />
                <Route path="/month" element={<Month month={currentMonth} />} />
                <Route
                  path="/week"
                  element={
                    <Week currentDate={currentDate} setViews={setViews} />
                  }
                ></Route>
                <Route
                  path="/day"
                  element={<SingleDay currentDate={currentDate} />}
                ></Route>
                <Route
                  path="/4Days"
                  element={
                    <FourDays currentDate={currentDate} setViews={setViews} />
                  }
                ></Route>
                <Route
                  path="/year"
                  element={<Year year={currentYear} />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
