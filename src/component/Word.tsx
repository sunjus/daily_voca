import { useState } from "react";

interface IProps {
  word: IWord;
}

interface IWord {
  id: number;
  day: string;
  eng: string;
  sense: string;
  isDone: boolean;
}

//props로 받아온 word를 w라는 변수로 쓰겠다
const Word = ({ word: w }:IProps) => {
  //delete 후에 화면를 자동으로 새로고침 해주기 위해
  const [word, setWord] = useState(w);

  const [isShow, setIsShow] = useState(true);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    //setIsDone(!isDone);
    //Update of CRUD
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  //Delete of CRUD
  const del = () => {
    if (window.confirm("Do you want to delete it?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
        //delete 후에 화면를 자동으로 새로고침 해주기 위해
      }).then((res) => {
        if (res.ok) {
          setWord({ ...word, id: 0 });
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

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
          <button onClick={del} className="btn_del">
            DELETE WORD
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Word;

/*
Create - POST
Read - GET 
Update - PUT
Delete - DELETE
*/
