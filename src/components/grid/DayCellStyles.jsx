import { makeStyles } from "@fluentui/react-components";

export const useDayCellStyles = makeStyles({
  dayCell: {
    cursor: "pointer",
    position: "relative",
  },
  prevMonthDay: {
    opacity: 0.5,
  },
  dayNumber: {
    fontWeight: "bold",
    padding: "4px",
  },
  todayCircle: {
    width: "6px",
    height: "6px",
    backgroundColor: "red",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "4px",
  },
  taskContainer: {
    position: "relative",
    minHeight: "45px", // Ensure there's space for tasks and the "more" button
  },
  taskBar: {
    padding: "2px",
    color: "white",
    fontSize: "12px",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    position: "absolute",
    left: 0,
    height: "18px",
    zIndex: 1,
    cursor: "pointer",
  },
  moreButton: {
    backgroundColor: "#e0e0e0",
    color: "#333",
    fontSize: "11px",
    padding: "2px 5px",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
    border: "none",
  },
  taskListItem: {
    padding: "8px",
    margin: "5px 0",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
  },
  taskDialogContainer: {
    backgroundColor: "#f5f5f5",
    padding: "16px",
    borderRadius: "4px",
    maxHeight: "300px",
    overflowY: "auto",
  },
  taskDialogContent: {
    maxHeight: "300px",
    overflowY: "auto",
    padding: "8px",
    borderRadius: "4px",
  },
  taskDialogFooter: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  
});
