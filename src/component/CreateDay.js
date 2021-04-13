import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";

const CreateDay = () => {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  const addDay = () => {
    //Create of CRUD
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("It's completed.");
        //Link to 처럼 페이지 전환시 유용
        history.push(`/`);
      }
    });
  };
  return (
    <div>
      <h3>Current days : {days.length} days</h3>
      <button onClick={addDay}>Add day</button>
    </div>
  );
};

export default CreateDay;
