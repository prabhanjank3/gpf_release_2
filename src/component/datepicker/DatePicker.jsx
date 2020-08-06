import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default props => {
  const handleDateChange = d => {
    props.handleChange(d);
  };
  return <DatePicker selected={props.selected} onChange={handleDateChange} />;
};
