import React, { useState, useEffect } from "react";
import { useCalendarStyles } from "./CalendarStyles";
import DayCell from "./DayCell";
import TaskPopup from "./TaskPopup";

const CalendarGrid = ({ calendarDays, highlightToday }) => {
  const styles = useCalendarStyles();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [selectedDay, setSelectedDay] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Log on mount to verify props
  useEffect(() => {
    console.log("CalendarGrid mounted with days:", calendarDays?.length);
    console.log("Sample day structure:", calendarDays[0]);
  }, [calendarDays]);

  // Handler for day cell clicks
  const handleDayClick = (day) => {
    console.log("handleDayClick called with:", day);
    
    // Accept any day object, even without date property
    if (day) {
      console.log("Setting selectedDay and showPopup to true");
      setSelectedDay(day);
      setShowPopup(true);
    }
  };

  // Handler for task creation
  const handleCreateTask = (taskName, span) => {
    console.log("Creating task:", taskName, "for day:", selectedDay?.day);
    
    if (!selectedDay) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      day: selectedDay.day,
      span: span,
    };

    setTasks([...tasks, newTask]);
    setShowPopup(false);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {/* Weekday headers */}
        {weekdays.map((day) => (
          <div key={day} className={styles.headerCell}>
            {day}
          </div>
        ))}

        {/* Calendar day cells */}
        {calendarDays.map((day, index) => (
          <DayCell
            key={`day-${index}-${day.day}`}
            day={day}
            highlightToday={highlightToday}
            onClick={handleDayClick}
          />
        ))}
      </div>

      {/* Task popup - rendered conditionally */}
      {showPopup && selectedDay && (
        <TaskPopup
          selectedDay={selectedDay}
          onCreate={handleCreateTask}
          onClose={() => {
            console.log("Closing popup");
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
};

export default CalendarGrid;