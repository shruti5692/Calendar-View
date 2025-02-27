// CalendarGrid.jsx
import React from 'react';
import { Tooltip, mergeClasses } from "@fluentui/react-components";
import { useCalendarStyles } from './CalendarStyles';
import DayCell from "./DayCell";

const CalendarGrid = ({ calendarDays, highlightToday }) => {
  const styles = useCalendarStyles();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {/* Weekday headers */}
        {weekdays.map(day => (
          <div key={day} className={styles.headerCell}>
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {calendarDays.map((day, index) => (
  <DayCell 
    key={day.date ? day.date.toISOString() : `empty-${index}`}
    day={day}
    highlightToday={highlightToday}
  />
))}

      </div>
    </div>
  );
};

export default CalendarGrid;