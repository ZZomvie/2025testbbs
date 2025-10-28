import React from "react";
import { Link } from "react-router-dom";

function View() {
  return (
    <div className="mt-3">
      <Link to="/view">
        <p>View</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat</p>
      </Link>
    </div>
  );
}

export default View;
