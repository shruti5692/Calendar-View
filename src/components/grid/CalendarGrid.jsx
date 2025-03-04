import React, { useState, useEffect } from "react";
import { useCalendarStyles } from "../CalendarStyles";
import DayCell from "./DayCell";
import TaskPopup from "../task/TaskPopup";
import TaskManager from "../task/TaskManager";

const CalendarGrid = ({ calendarDays, highlightToday }) => {
  const styles = useCalendarStyles();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [selectedDay, setSelectedDay] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("CalendarGrid initialized with days:", calendarDays?.length);
  }, [calendarDays]);

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDay(day);
      setShowPopup(true);
      setIsEditMode(false);
      setSelectedTask(null);
    }
  };

  const handleTaskClick = (task, day, event) => {
    event.stopPropagation();
    setSelectedDay(day);
    setSelectedTask(task);
    setIsEditMode(true);
    setShowPopup(true);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {weekdays.map((day) => (
          <div key={day} className={styles.headerCell}>
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => (
          <DayCell
            key={`day-${index}-${day.day}`}
            day={day}
            dayIndex={index}
            highlightToday={highlightToday}
            onClick={handleDayClick}
            onTaskClick={(task, event) => handleTaskClick(task, day, event)}
            tasks={TaskManager.getTasksForDay(tasks, calendarDays, day, index)}
            getDayByIndex={(idx) => calendarDays[idx] || null}
          />
        ))}
      </div>

      {showPopup && selectedDay && (
        <TaskPopup
          selectedDay={selectedDay}
          selectedTask={selectedTask}
          isEditMode={isEditMode}
          onCreate={(taskName, span, color) =>
            TaskManager.handleCreateTask(
              setTasks,
              tasks,
              selectedDay,
              isEditMode,
              selectedTask,
              taskName,
              span,
              color,
              setShowPopup
            )
          }
          onDelete={() =>
            TaskManager.handleDeleteTask(
              setTasks,
              tasks,
              selectedTask,
              setShowPopup,
              setSelectedTask,
              setIsEditMode
            )
          }
          onClose={() => {
            setShowPopup(false);
            setSelectedTask(null);
            setIsEditMode(false);
          }}
          availableColors={TaskManager.taskColors}
        />
      )}
    </div>
  );
};

export default CalendarGrid;
