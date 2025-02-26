import { makeStyles } from "@fluentui/react-components";

export const dayCellStyles = makeStyles({
  root: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0",
    },
    "&.today": {
      backgroundColor: "#0078D4",
      color: "#fff",
    },
  },
});
