import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";
import { useHistory } from " react-router";

const CreateWord = () => {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    //Create of CRUD
    fetch(`http://localhost:3001/words/`, {
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
        history.push(`/day/${dayRef.current.value}`);
      }
    });
  };

  //to access DOM eg.focus,scroll
  const engRef = useRef(null);
  const defRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label> English </label>
          <input type="text" placeholder="computer" ref={engRef} />
        </div>
        <div className="input_area">
          <label> Definition </label>
          <input type="text" placeholder="컴" ref={defRef} />
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
        <button>save</button>
      </form>
    </div>
  );
};

export default CreateWord;
