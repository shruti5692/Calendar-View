import React from "react";
import { Tooltip, mergeClasses } from "@fluentui/react-components";
import { useCalendarStyles } from "./CalendarStyles";

const DayCell = ({ day, highlightToday }) => {
  const styles = useCalendarStyles();
  const isHighlighted = highlightToday && day.isToday;

  return (
    <div
      className={mergeClasses(
        styles.dayCell,
        day.isPrevMonth && styles.prevMonthDay
      )}
    >
      {/* Wrap day number inside a div for styling */}
      <div className={styles.dayNumber}>
        {day.day}
        {isHighlighted && <div className={styles.todayCircle}></div>}
      </div>
    </div>
  );
};

export default DayCell;
