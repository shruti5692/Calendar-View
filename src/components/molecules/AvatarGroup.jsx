import React from "react";
import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import { avatarGroupStyles } from "./AvatarGroup.styles";

const AvatarGroupComponent = ({ users = [] }) => {
  // Ensure users is always an array
  const validUsers = Array.isArray(users) ? users : [];

  // Partition the items properly
  const partitionedItems = partitionAvatarGroupItems({ items: validUsers });

  return (
    <AvatarGroup layout="stack" className={avatarGroupStyles.root}>
      {partitionedItems.inlineItems?.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}
      {partitionedItems.overflowItems?.length > 0 && (
        <AvatarGroupPopover>
          {partitionedItems.overflowItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  );
};

export default AvatarGroupComponent;
