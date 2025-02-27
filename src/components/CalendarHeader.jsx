import React from "react";
import { Text } from "@fluentui/react-components";
import { useCalendarStyles } from "./CalendarStyles";
import AvatarGroupComponent from "./AvatarGroup";
import TodayButton from "./TodayButton";

const CalendarHeader = ({ users, currentDate, goToToday }) => {
  const styles = useCalendarStyles();

  const formatMonthYear = (date) => {
    return date.toLocaleDateString("default", { month: "long", year: "numeric" });
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <AvatarGroupComponent users={users} />
      </div>

      <div className={styles.headerRight}>
        <TodayButton goToToday={goToToday} />
      </div>
    </div>
  );
};

export default CalendarHeader;
