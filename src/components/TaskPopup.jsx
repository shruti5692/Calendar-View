import React, { useState, useEffect } from "react";
import { Button } from "@fluentui/react-components";

const TaskPopup = ({ selectedDay, onCreate, onClose }) => {
  const [taskName, setTaskName] = useState("");
  const [taskSpan, setTaskSpan] = useState(1);

  // Log when the component mounts
  useEffect(() => {
    console.log("TaskPopup mounted for day:", selectedDay?.day);
  }, [selectedDay]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with task:", taskName);
    
    if (taskName.trim()) {
      onCreate(taskName, taskSpan);
      setTaskName("");
      setTaskSpan(1);
    }
  };

  // Styles for popup components
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
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
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
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      marginTop: "10px",
    }
  };

  return (
    <div style={styles.popupOverlay} onClick={onClose}>
      <div style={styles.popupBox} onClick={(e) => e.stopPropagation()}>
        <h3>Create Task for Day {selectedDay?.day}</h3>
        
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
          
          <div style={styles.buttonContainer}>
            <Button type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit" appearance="primary">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskPopup;