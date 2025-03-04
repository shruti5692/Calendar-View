import React from "react";
import { mergeClasses } from "@fluentui/react-components";
import { useCalendarStyles } from "../CalendarStyles";

const DayCell = ({ day, dayIndex, highlightToday, onClick, onTaskClick, tasks, getDayByIndex }) => {
  const styles = useCalendarStyles();
  const isHighlighted = highlightToday && day.isToday;

  const cellPosition = dayIndex % 7; // 0-6 for position in week

  return (
    <div
      className={mergeClasses(styles.dayCell, day.isPrevMonth && styles.prevMonthDay)}
      onClick={() => onClick(day)}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <div className={styles.dayNumber}>
        {day.day}
        {isHighlighted && <div className={styles.todayCircle}></div>}
      </div>

      {/* Task bars */}
      <div className={styles.taskContainer} style={{ position: "relative" }}>
        {tasks.map((task) => {
          const isStartCell = cellPosition === task.rowStartPosition;
          const isEndCell = cellPosition === task.rowStartPosition + task.rowSpan - 1;
          
          let borderRadius = "0";
          if (isStartCell && isEndCell) borderRadius = "4px";
          else if (isStartCell) borderRadius = "4px 0 0 4px";
          else if (isEndCell) borderRadius = "0 4px 4px 0";
          
          const marginLeft = isStartCell ? '0' : '-1px'; // Overlap to make continuous
          const marginRight = isEndCell ? '0' : '-1px';
          const width = `calc(100% + 2px)`; // Slightly wider to hide seams
          
          // Calculate vertical position 
          const topPosition = `${task.verticalPosition * 20}px`;
          
          return (
            <div
              key={`${task.segmentId}-pos-${cellPosition}`}
              className={styles.taskBar}
              onClick={(e) => onTaskClick(task, e)}
              style={{
                width: width,
                backgroundColor: task.color || "blue",
                padding: "2px",
                borderRadius: borderRadius,
                color: "white",
                fontSize: "12px",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginLeft: marginLeft,
                marginRight: marginRight,
                position: "absolute",
                top: topPosition,
                left: 0,
                height: "18px",
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              {/* Only show name on first segment's first cell */}
              {task.isFirstSegment && cellPosition === task.rowStartPosition ? task.name : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayCell;