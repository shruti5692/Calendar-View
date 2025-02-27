import React from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  weekdayHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center",
    fontWeight: "bold",
    padding: "8px 0",
    borderBottom: "1px solid #ddd",
  },
  weekdayCell: {
    padding: "4px",
  },
});

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeekdayHeader = () => {
  const styles = useStyles();

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
