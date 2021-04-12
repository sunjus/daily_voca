import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DayList = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id} className="list_day">
          <Link to={`/day/${day.day}`}>DAY{day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
