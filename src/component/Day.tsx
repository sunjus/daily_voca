import { useParams, Link } from "react-router-dom";
import { useState } from "react"
import Word, { IWord } from "./Word";
import { IDay } from "./DayList"
import useFetch from "../hooks/useFetch";

const Day = () => {
  //useParams(): parameters on a given URL (App.js day/:day)
  //const { day } = useParams();
  const day = useParams<{ day : string }>().day;
  const days : IDay[] = useFetch("http://localhost:3001/days");
  const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
  console.log(day)
  console.log(words)
  const current = Number(day)
  console.log(current)
/*
  const length = days.length
  console.log(length)
  
  function prevDay(){
   return(current === 1 ? length-1 : current-1) 
  }

  const nextDay = () => 
    Number(day) === length-1 ? 1 : Number(day)+1;
*/  
  
  return (
    <div className="word">
      {words.length === 0 && <span>Day Loading...</span>}
      <div className="word_header">
        <Link to={`/day/${Number(day)-1}`}><span>◀️</span></Link>             
        <h2>DAY {day}</h2>   
        <Link to={`/day/${Number(day)+1}`}><span>▶️</span></Link>             
      </div>
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
