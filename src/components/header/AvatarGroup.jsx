// AvatarGroup.jsx
import React from 'react';
import { 
  Avatar,
  AvatarGroup as FluentAvatarGroup,
  Button
} from "@fluentui/react-components";
import { 
  PersonAddFilled
} from "@fluentui/react-icons";
import { useCalendarStyles } from '../CalendarStyles';

const AvatarGroupComponent = ({ users = [] }) => {
  const styles = useCalendarStyles();

  return (
    <div className={styles.headerLeft}>
      <div className={styles.avatarGroup}>
        {users.slice(0, 4).map((user) => (
          <Avatar
            key={user.id}
            name={user.name}
            image={{ src: user.profilePic }}
            size={32}
            className={styles.customAvatar}
          />
        ))}
        {users.length > 4 && (
          <div className={styles.overflowAvatar}>+{users.length - 4}</div>
        )}
      </div>

      <Button
        icon={<PersonAddFilled /> }
        appearance="subtle"
        size="small"
        iconOnly
        className={styles.addPersonButton}
        aria-label="Add person"
      />
    </div>
  );
};



export default AvatarGroupComponent;