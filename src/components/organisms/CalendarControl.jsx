import React from "react";
import ResetToCurrentDate from "../atoms/ResetToCurrentDate";
import { calendarControlStyles } from "./CalendarControl.styles";

const CalendarControl = () => {
  return (
    <div className={calendarControlStyles.container}>
      <ResetToCurrentDate />
    </div>
  );
};

export default CalendarControl;
