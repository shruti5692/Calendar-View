import React, { useState } from "react";
import { useCalendarStyles } from "./CalendarStyles";
import DayCell from "./DayCell";
import TaskPopup from "./TaskPopup";

const CalendarGrid = ({ calendarDays, highlightToday }) => {
  const styles = useCalendarStyles();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // State to manage popup visibility and selected day
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState([]); // Store tasks

  // Function to open popup when clicking a day
  const handleDayClick = (day) => {
    if (!day?.date) return;
    setSelectedDay(day);
    setPopupOpen(true);
  };

  // Function to handle task creation
  const handleCreateTask = (taskName, span) => {
    if (!selectedDay) return;

    // Store the new task
    const newTask = {
      id: Date.now(), // Unique ID
      name: taskName,
      startDate: selectedDay.date,
      span: span, // How many days it covers
    };

    setTasks([...tasks, newTask]); // Add to task list
    setPopupOpen(false);
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

        {/* Calendar days */}
        {calendarDays.map((day, index) => (
          <DayCell
            key={day.date ? day.date.toISOString() : `empty-${index}`}
            day={day}
            highlightToday={highlightToday}
            onClick={handleDayClick} // Open popup when clicked
            tasks={tasks} // Pass tasks to show them in the grid
          />
        ))}
      </div>

      {/* Task Popup */}
      {popupOpen && (
        <TaskPopup
          onClose={() => setPopupOpen(false)}
          onCreate={handleCreateTask}
        />
      )}
    </div>
  );
};

export default CalendarGrid;
