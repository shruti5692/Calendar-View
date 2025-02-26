import React from "react";
import AvatarGroupComponent from "../molecules/AvatarGroup";
import AddUserButton from "../atoms/AddUserButton";
import { userControlStyles } from "./UserControl.styles";

const UserControl = () => {
  const users = ["John Doe", "Jane Smith", "Alice Johnson"]; // Sample data

  return (
    <div className={userControlStyles.container}>
      <AvatarGroupComponent users={users} />
      <AddUserButton />
    </div>
  );
};

export default UserControl;
