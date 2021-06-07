import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export interface IDay {
  id: number,
  day: number,
}

const DayList = () => {
  const days : IDay[] = useFetch("http://localhost:5000/days");
  /*
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);
*/

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id} className="list_day">
          <Link to={`/day/${day.day}`}>DAY{day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
