import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";
import { IDay } from "./DayList"

const CreateWord = () => {
  const days : IDay[] = useFetch("http://localhost:5000/days");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //통신중에 버튼을 눌러도 반응하지 않게 하기 위해
    if (!isLoading && dayRef.current && engRef.current && defRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      //const eng = engRef.current.value;
      //const sense = defRef.current.value;  

      //Create of CRUD
      fetch(`http://localhost:5000/words/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          sense: defRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("It's completed.");
          //Link to 처럼 페이지 전환시 유용
          history.push(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  };

  //to access DOM eg.focus,scroll
  const engRef = useRef<HTMLInputElement>(null);
  const defRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label> English </label>
          <input type="text" placeholder="" ref={engRef} />
        </div>
        <div className="input_area">
          <label> Definition </label>
          <input type="text" placeholder="" ref={defRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button style={{ opacity: isLoading ? 0.3 : 1 }}>
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default CreateWord;
