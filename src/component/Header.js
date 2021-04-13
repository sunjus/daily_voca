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
        <button>
          <a href="#">Add vaca</a>
        </button>
        <button>
          <a href="#">Add day</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
