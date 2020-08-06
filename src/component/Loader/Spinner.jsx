import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";
export default () => {
  //other logic

  return (
    <div className="loader">
      <Loader
        type="Circles"
        color="#3272d9"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};
