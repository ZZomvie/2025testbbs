import React from "react";
import { Link } from "react-router-dom";

function View() {
  return (
    <div className="mt-3">
      <Link to="/view">
        <div className="btn btn-outline-primary">View</div>
      </Link>
    </div>
  );
}

export default View;
