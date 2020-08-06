import React from "react";
import "./FormComponents.css";
import { Redirect, Link } from "react-router-dom";

export default props => {
  return (
    <div className="small-info-btn-div">
      <button>Save</button>&nbsp;&nbsp;
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
};
