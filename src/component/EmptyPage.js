import React from "react";
import { Link } from "react-router-dom";

const EmptyPage = () => {
  return (
    <div>
      <h2>Empty Page</h2>
      <button>
        <Link to="/">Return</Link>
      </button>
    </div>
  );
};

export default EmptyPage;
