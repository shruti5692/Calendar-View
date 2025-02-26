import React from "react";
import { calendarGridStyles } from "./CalendarGrid.styles";

const CalendarGrid = () => {
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalDays = 30; // Assuming a 30-day month for now
  const firstDayIndex = 2; // Example: If 1st day is Wednesday (Index 2)

  const renderDays = () => {
    let cells = [];

    for (let i = 0; i < firstDayIndex; i++) {
      cells.push(<div key={`empty-${i}`} className={calendarGridStyles.dayCell}></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      cells.push(
        <div key={day} className={calendarGridStyles.dayCell}>
          {day}
        </div>
      );
    }

    return cells;
  };

  return (
    <div className={calendarGridStyles.grid}>
      {daysInWeek.map((day) => (
        <div key={day} className={calendarGridStyles.dayHeader}>
          {day}
        </div>
      ))}
      {renderDays()}
    </div>
  );
};

export default CalendarGrid;
