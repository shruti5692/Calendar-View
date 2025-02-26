import { makeStyles } from "@fluentui/react-components";

export const calendarHeaderStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
});
