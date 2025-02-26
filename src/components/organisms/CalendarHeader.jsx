import React from "react";
import AvatarGroupComponent from "../molecules/AvatarGroup";
import AddUserButton from "../atoms/AddUserButton";
import ResetToCurrentDate from "../atoms/ResetToCurrentDate";
import { calendarHeaderStyles } from "./CalendarHeader.styles";

const CalendarHeader = () => {
  return (
    <div className={calendarHeaderStyles.header}>
      <div className={calendarHeaderStyles.leftSection}>
        <AvatarGroupComponent />
        <AddUserButton />
      </div>
      <ResetToCurrentDate />
    </div>
  );
};

export default CalendarHeader;
