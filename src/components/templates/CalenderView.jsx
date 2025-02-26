import React from "react";
import CalendarHeader from "../organisms/CalendarHeader";
import CalendarGrid from "../organisms/CalendarGrid";
import { calendarViewStyles } from "./CalendarView.styles";

const CalendarView = () => {
  return (
    <div className={calendarViewStyles.container}>
      <CalendarHeader />
      <CalendarGrid />
    </div>
  );
};

export default CalendarView;
