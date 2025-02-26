import React from "react";
import { dayCellStyles } from "./DayCell.styles";

const DayCell = ({ date, isToday, onClick }) => {
  return (
    <div className={`${dayCellStyles} ${isToday ? "today" : ""}`} onClick={onClick}>
      {date}
    </div>
  );
};

export default DayCell;
