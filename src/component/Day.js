import React from "react";
import data from "../db/data.json";
import { useParams } from "react-router-dom";

const Day = () => {
  //useParams(): parameters in a given URL (App.js day/:day)
  const day = useParams().day;
  const dailyWord = data.words.filter((word) => word.day === Number(day));
  console.log(data);
  console.log(dailyWord);

  return (
    <div className="word">
      <h2>DAY {day}</h2>
      <table>
        <tbody>
          {dailyWord.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.sense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
