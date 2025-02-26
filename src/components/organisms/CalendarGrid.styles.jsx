import { makeStyles } from "@fluentui/react-components";

export const calendarGridStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "2px",
    border: "1px solid #ccc",
  },
  dayHeader: {
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f3f3f3",
  },
  dayCell: {
    minHeight: "50px",
    textAlign: "center",
    padding: "10px",
    border: "1px solid #ddd",
  },
});
