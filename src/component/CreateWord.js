import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const days = useFetch("http://localhost:3001/days");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(engRef.current.value);
    console.log(defRef.current.value);
    console.log(dayRef.current.value);
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
