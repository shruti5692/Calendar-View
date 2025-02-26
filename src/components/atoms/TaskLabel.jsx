import React from "react";
import { taskLabelStyles } from "./TaskLabel.styles";

const TaskLabel = ({ taskName }) => {
  return <span className={taskLabelStyles}>{taskName}</span>;
};

export default TaskLabel;
