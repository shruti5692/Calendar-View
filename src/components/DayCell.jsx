import React from "react";
import { mergeClasses } from "@fluentui/react-components";
import { useCalendarStyles } from "./CalendarStyles";

const DayCell = ({ day, highlightToday, onClick }) => {
  const styles = useCalendarStyles();
  const isHighlighted = highlightToday && day.isToday;

  const handleClick = () => {
    console.log("DayCell clicked:", day);
    // Check if onClick is a function
    if (typeof onClick === 'function') {
      onClick(day);
    } else {
      console.error("onClick is not a function:", onClick);
    }
  };

  return (
    <div
      className={mergeClasses(styles.dayCell, day.isPrevMonth && styles.prevMonthDay)}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Add pointer cursor to show it's clickable
    >
      <div className={styles.dayNumber}>
        {day.day}
        {isHighlighted && <div className={styles.todayCircle}></div>}
      </div>
    </div>
  );
};

export default DayCell;