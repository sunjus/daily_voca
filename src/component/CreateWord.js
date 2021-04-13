import React from "react";
import useFetch from "../hooks/useFetch";

const CreateWord = () => {
  const days = useFetch("http://localhost:3001/days");

  return (
    <div>
      <form>
        <div className="input_area">
          <label> English </label>
          <input type="text" placeholder="computer" />
        </div>
        <div className="input_area">
          <label> Definition </label>
          <input type="text" placeholder="컴" />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select>
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
