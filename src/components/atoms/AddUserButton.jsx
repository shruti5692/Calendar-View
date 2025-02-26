import React from "react";
import { Button} from "@fluentui/react-components";
import { PersonAddRegular } from "@fluentui/react-icons";
import { addUserButtonStyles } from "./AddUserButton.styles";

const AddUserButton = ({ onClick }) => {
  return (
    <Button icon={<PersonAddRegular /> } onClick={onClick} className={addUserButtonStyles} />
  );
};

export default AddUserButton;
