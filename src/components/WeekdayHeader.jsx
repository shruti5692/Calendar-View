import React from "react";
import { useCalendarStyles } from './CalendarStyles';

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeekdayHeader = () => {
  const styles = useCalendarStyles();

  return (
    <div className={styles.weekdayHeader}>
      {weekdays.map((day) => (
        <div key={day} className={styles.weekdayCell}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdayHeader;
