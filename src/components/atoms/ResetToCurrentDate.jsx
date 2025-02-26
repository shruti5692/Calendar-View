import React from "react";
import { Button } from "@fluentui/react-components";
import { resetButtonStyles } from "./ResetToCurrentDate.styles";

const ResetToCurrentDate = ({ text = "Today", onClick }) => {
  return (
    <Button onClick={onClick} className={resetButtonStyles}>
      {text}
    </Button>
  );
};

export default ResetToCurrentDate;
