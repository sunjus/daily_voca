import React from "react";

const Word = ({ word }) => {
  return (
    <div>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{word.eng}</td>
        <td>{word.sense}</td>
        <td>
          <button>DEFINITION</button>
        </td>
        <td>
          <button className="bnt_del">DELETE</button>
        </td>
      </tr>
    </div>
  );
};

export default Word;
