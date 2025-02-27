import React, { useState } from "react";
import { Dialog, DialogSurface, DialogBody, DialogTitle, DialogActions, Button, Input } from "@fluentui/react-components";

const TaskPopup = ({ onClose, onCreate }) => {
  const [taskName, setTaskName] = useState("");
  const [span, setSpan] = useState(1);

  return (
    <Dialog open={true} onDismiss={onClose}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Add New Task</DialogTitle>
          <Input
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Duration (Days)"
            value={span}
            onChange={(e) => setSpan(parseInt(e.target.value))}
            min={1}
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={() => onCreate(taskName, span)}>Create</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default TaskPopup;
