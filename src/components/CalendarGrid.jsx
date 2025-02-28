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
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Default task colors
  const taskColors = [
    "#4287f5", // Blue
    "#f54242", // Red
    "#42f563", // Green
    "#f5a742", // Orange
    "#9c42f5", // Purple
    "#f542b3", // Pink
    "#42d7f5"  // Cyan
  ];

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
    event.stopPropagation(); // Prevent triggering day click
    setSelectedDay(day);
    setSelectedTask(task);
    setIsEditMode(true);
    setShowPopup(true);
  };

  const handleCreateTask = (taskName, span, color) => {
    if (!selectedDay) return;

    if (isEditMode && selectedTask) {
      // Update existing task
      const updatedTasks = tasks.map(task => 
        task.id === selectedTask.id 
          ? { ...task, name: taskName, span: span, color: color }
          : task
      );
      setTasks(updatedTasks);
    } else {
      // Create new task
      const newTask = {
        id: Date.now(),
        name: taskName,
        startDay: selectedDay.day,
        span: span,
        color: color || taskColors[Math.floor(Math.random() * taskColors.length)]
      };
      setTasks([...tasks, newTask]);
    }
    
    setShowPopup(false);
    setSelectedTask(null);
    setIsEditMode(false);
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      const updatedTasks = tasks.filter(task => task.id !== selectedTask.id);
      setTasks(updatedTasks);
      setShowPopup(false);
      setSelectedTask(null);
      setIsEditMode(false);
    }
  };

  // Group tasks by rows for continuous rendering
  const getTasksByRow = () => {
    const taskRows = {};
    
    tasks.forEach(task => {
      const startDayIndex = calendarDays.findIndex(d => d.day === task.startDay);
      if (startDayIndex === -1) return;
      
      const startRowIndex = Math.floor(startDayIndex / 7);
      const endDayIndex = Math.min(startDayIndex + task.span - 1, calendarDays.length - 1);
      const endRowIndex = Math.floor(endDayIndex / 7);
      
      // For each row this task spans
      for (let rowIndex = startRowIndex; rowIndex <= endRowIndex; rowIndex++) {
        if (!taskRows[rowIndex]) {
          taskRows[rowIndex] = [];
        }
        
        // Calculate the span for this segment in this row
        let rowStartIndex = rowIndex * 7;
        let rowEndIndex = rowStartIndex + 6;
        
        let segmentStartIndex = Math.max(startDayIndex, rowStartIndex);
        let segmentEndIndex = Math.min(endDayIndex, rowEndIndex);
        
        let segmentSpan = segmentEndIndex - segmentStartIndex + 1;
        let isFirstSegment = segmentStartIndex === startDayIndex;
        
        taskRows[rowIndex].push({
          ...task,
          rowStartPosition: segmentStartIndex % 7,
          rowSpan: segmentSpan,
          isFirstSegment,
          segmentId: `${task.id}-row-${rowIndex}`,
          originalIndex: startDayIndex // Keep track of original position for vertical positioning
        });
      }
    });
    
    // Sort tasks within each row by their original index to maintain consistent vertical order
    Object.keys(taskRows).forEach(rowIndex => {
      taskRows[rowIndex].sort((a, b) => a.originalIndex - b.originalIndex);
      
      // Assign vertical positions
      taskRows[rowIndex].forEach((task, idx) => {
        task.verticalPosition = idx;
      });
    });
    
    return taskRows;
  };

  // Get day by index for task handling
  const getDayByIndex = (index) => {
    return index >= 0 && index < calendarDays.length ? calendarDays[index] : null;
  };

  // Get tasks for a specific cell, considering row layouts
  const getTasksForDay = (day, dayIndex) => {
    const rowIndex = Math.floor(dayIndex / 7);
    const rowTaskList = getTasksByRow()[rowIndex] || [];
    
    return rowTaskList.filter(task => {
      const dayPosition = dayIndex % 7;
      return (
        dayPosition >= task.rowStartPosition && 
        dayPosition < task.rowStartPosition + task.rowSpan
      );
    });
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
            tasks={getTasksForDay(day, index)}
            getDayByIndex={getDayByIndex}
          />
        ))}
      </div>

      {showPopup && selectedDay && (
        <TaskPopup
          selectedDay={selectedDay}
          selectedTask={selectedTask}
          isEditMode={isEditMode}
          onCreate={handleCreateTask}
          onDelete={handleDeleteTask}
          onClose={() => {
            setShowPopup(false);
            setSelectedTask(null);
            setIsEditMode(false);
          }}
          availableColors={taskColors}
        />
      )}
    </div>
  );
};

export default CalendarGrid;
