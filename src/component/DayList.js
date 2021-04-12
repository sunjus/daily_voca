import React from "react";
import data from "../db/data.json";
import { Link } from "react-router-dom";

const DayList = () => {
  console.log(data.days);

  return (
    <ul>
      {data.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>DAY{day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
