// CalendarStyles.js
import { makeStyles } from "@fluentui/react-components";

export const useCalendarStyles = makeStyles({
  calendarWrapper: {
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "1200px", // Increased width
    margin: "0 auto",
  },
  calendarContainer: {
    backgroundColor: "#17181c",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    //borderBottom: "1px solid #e5e7eb",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  avatarGroup: {
    display: "flex",
    alignItems: "center",
  },
  customAvatar: {
    border: "2px solid white",
    marginLeft: "-8px", // Increased overlap effect
    borderRadius: "50%", // Circular avatars
    "&:first-child": {
      marginLeft: "0",
    },
  },
  overflowAvatar: {
    backgroundColor: "#313b3f",
    color: "#a4aec1",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid #ddd",
    marginLeft: "-6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
  },
  addPersonButton: {
    backgroundColor: "#1f252c",
    color: "#a4aec1",
  height: "40px", // Slightly increased size
  width: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease",
  "&:hover": {
    backgroundColor: "#2b2e36", // Subtle background change
    color: "#b4b8c4", // Slightly lighter text color
  },
  },

  todayButton: {
    fontSize: "16px", // Slightly increased size
  backgroundColor: "#23262e",
  color: "#a4aec1",
  padding: "8px 16px",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#525a69", // Slightly lighter shade on hover
  },
  },

  gridContainer: {
    padding: "20px",
    backgroundColor: "#202329",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "3px",
    border: "1px solid #313639", // Ensure visible grid lines
  },
  headerCell: {
    textAlign: "center",
    padding: "12px 0",
    fontSize: "16px",
    fontWeight: "600",
    color: "#9a9fa5",
  },
  dayCell: {
    height: "100px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #313639",
    backgroundColor: "#202329",
  },
  prevMonthDay: {
    color: "#666a70",
    opacity: "0.5",
  },
  todayCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "rgba(116, 128, 152, 0.3)", // Semi-transparent
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  
  dayContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  dayNumber: {
    position: "relative", // Ensures correct positioning inside cell
    fontSize: "16px",
    fontWeight: "600",
    color: "#9a9fa5",
  },
  
  
});
