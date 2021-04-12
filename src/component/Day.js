import React from "react";
import data from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
  //useParams(): parameters on a given URL (App.js day/:day)
  //const { day } = useParams();
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
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
