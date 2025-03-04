import React from "react";
import {
  Button,
  Dialog,
  DialogSurface,
  DialogBody,
  DialogTitle,
} from "@fluentui/react-components";
import { useDayCellStyles } from "./TaskDialogStyles.jsx";

const TaskDialog = ({ open, onClose, tasks, day, onTaskClick }) => {
  const styles = useDayCellStyles();

  return (
    <Dialog open={open} onDismiss={onClose}>
      <DialogSurface>
        <DialogBody>
          <div className={styles.taskDialogContainer}>
            <DialogTitle>Tasks for Day {day.day}</DialogTitle>
            <div className={styles.taskDialogContent}>
              {tasks.map((task) => (
                <div
                  key={task.segmentId}
                  className={styles.taskListItem}
                  onClick={(e) => {
                    onTaskClick(task, e);
                    onClose();
                  }}
                  style={{
                    backgroundColor: task.color || "blue",
                    padding: "8px",
                    margin: "5px 0",
                    borderRadius: "4px",
                    color: "#13280d",
                    cursor: "pointer",
                  }}
                >
                  {task.name}
                </div>
              ))}
            </div>

            
            <div className={styles.taskDialogFooter}>
              <Button
                onClick={(e) => {
                  e.stopPropagation(); 
                  onClose(); 
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default TaskDialog;
