import React, { useState, useEffect } from "react";
import { Button } from "@fluentui/react-components";

const TaskPopup = ({ selectedDay, selectedTask, isEditMode, onCreate, onDelete, onClose, availableColors }) => {
  const [taskName, setTaskName] = useState("");
  const [taskSpan, setTaskSpan] = useState(1);
  const [taskColor, setTaskColor] = useState("");

  useEffect(() => {
    console.log("TaskPopup opened for day:", selectedDay?.day);
    
    // Initialize form with task data if in edit mode
    if (isEditMode && selectedTask) {
      setTaskName(selectedTask.name);
      setTaskSpan(selectedTask.span);
      setTaskColor(selectedTask.color || availableColors[0]);
    } else {
      setTaskName("");
      setTaskSpan(1);
      setTaskColor(availableColors[0]);
    }
  }, [selectedDay, selectedTask, isEditMode, availableColors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim()) {
      onCreate(taskName, taskSpan, taskColor);
      setTaskName("");
      setTaskSpan(1);
      setTaskColor(availableColors[0]);
    }
  };

  const styles = {
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    popupBox: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    inputField: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
      marginBottom: "10px",
    },
    colorContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "10px",
    },
    colorOption: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      cursor: "pointer",
      border: "2px solid transparent",
    },
    selectedColorOption: {
      border: "2px solid black",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      marginTop: "10px",
    },
    deleteButton: {
      marginRight: "auto",
      backgroundColor: "#f44336",
      color: "white",
    }
  };

  return (
    <div style={styles.popupOverlay} onClick={onClose}>
      <div style={styles.popupBox} onClick={(e) => e.stopPropagation()}>
        <h3>{isEditMode ? `Edit Task` : `Create Task for Day ${selectedDay?.day}`}</h3>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.inputField}
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            required
          />

          <input
            style={styles.inputField}
            type="number"
            value={taskSpan}
            onChange={(e) => setTaskSpan(Number(e.target.value))}
            placeholder="Days"
            min="1"
          />

          <div>
            <label>Color:</label>
            <div style={styles.colorContainer}>
              {availableColors.map((color, index) => (
                <div
                  key={`color-${index}`}
                  style={{
                    ...styles.colorOption,
                    backgroundColor: color,
                    ...(color === taskColor ? styles.selectedColorOption : {})
                  }}
                  onClick={() => setTaskColor(color)}
                />
              ))}
            </div>
          </div>

          <div style={styles.buttonContainer}>
            {isEditMode && (
              <Button 
                type="button" 
                onClick={onDelete}
                style={styles.deleteButton}
              >
                Delete
              </Button>
            )}
            <Button type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit" appearance="primary">
              {isEditMode ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskPopup;