import React, { useState } from "react";

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <div>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.sense}</td>
        <td>
          <button onClick={toggleShow}>
            {isShow ? "HIDE" : "SHOW"} DEFINITION
          </button>
        </td>
        <td>
          <button className="btn_del">DELETE WORD</button>
        </td>
      </tr>
    </div>
  );
};

export default Word;
