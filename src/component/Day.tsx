import React from "react";
import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word";
import useFetch from "../hooks/useFetch";

const Day = () => {
  //useParams(): parameters on a given URL (App.js day/:day)
  //const { day } = useParams();
  const day = useParams<{ day : string }>().day;
  const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

  /*
  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
    //의존성 배열dependency array: this day = line 14 {day}
  }, [day]);
  */

  return (
    <div className="word">
      {words.length === 0 && <span>Loading...</span>}
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