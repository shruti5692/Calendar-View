const TaskPopupStyles = {
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
    },
  };
  
  export default TaskPopupStyles;
  