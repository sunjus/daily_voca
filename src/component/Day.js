import React, { useState, useEffect } from "react";
import data from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

const Day = () => {
  const [words, setWords] = useState([]);
  //useParams(): parameters on a given URL (App.js day/:day)
  //const { day } = useParams();
  const day = useParams().day;

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
    //의존성 배열dependency array
  }, [day]);

  return (
    <div className="word">
      <h2>DAY {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
