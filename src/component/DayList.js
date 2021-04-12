import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DayList = () => {
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(1);

  const countPlus = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("changed");
  });

  return (
    <ul>
      {days.map((day) => (
        <li key={day.id} className="list_day">
          <Link to={`/day/${day.day}`}>DAY{day.day}</Link>
        </li>
      ))}
      <button onClick={countPlus}>{count}</button>
    </ul>
  );
};

export default DayList;
