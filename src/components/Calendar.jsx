import React from "react";
import { useCalendarStyles } from "./CalendarStyles";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import useCalendar from "./hooks/useCalendar";

const Calendar = () => {
  const styles = useCalendarStyles();
  const { currentDate, calendarDays, goToToday, goToPreviousMonth, goToNextMonth } = useCalendar();

  const users = [
    { id: 1, name: "Ryan Thompson", profilePic: "https://i.pravatar.cc/32?img=1" },
    { id: 2, name: "Karen Smith", profilePic: "https://i.pravatar.cc/32?img=2" },
    { id: 3, name: "Chris Walker", profilePic: "https://i.pravatar.cc/32?img=3" },
    { id: 4, name: "Emma Wilson", profilePic: "https://i.pravatar.cc/32?img=4" },
    { id: 5, name: "David Johnson", profilePic: "https://i.pravatar.cc/32?img=5" },
    { id: 6, name: "Sarah Miller", profilePic: "https://i.pravatar.cc/32?img=6" },
    { id: 7, name: "Michael Brown", profilePic: "https://i.pravatar.cc/32?img=7" },
  ];

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        <CalendarHeader
          users={users}
          currentDate={currentDate}
          goToToday={goToToday}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />

        <CalendarGrid
          calendarDays={calendarDays}
          highlightToday={true}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default Calendar;
