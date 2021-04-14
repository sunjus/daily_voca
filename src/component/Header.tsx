import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>
          <Link to="/">📚 DAILY VOCA 📖</Link>
        </h1>
      </div>
      <div className="menu">
        <Link to="/"> 🏠 </Link>
        <button>
          <Link to="/create_word">Add vaca</Link>
        </button>
        <button>
          <Link to="/create_day">Add day</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
