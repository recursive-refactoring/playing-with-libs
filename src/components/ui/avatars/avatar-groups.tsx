import { AvatarGroup } from "@mui/material";
import { DynamicAvatar } from "./dynamic.avatar";
import { getFullName, getInitials } from "@/utils";

export const CommonAvatarGroup = (props: any) => {
  const {
    width = 28,
    height = 28,
    max,
    customStyles,
    selectedUsers,
    variant,
  } = props;

  return (
    <AvatarGroup
      sx={{
        justifyContent: "flex-end",
        ...customStyles,
        ".MuiAvatar-root": {
          bgcolor: "primary.main",
          width,
          height,
          fontSize: (theme) => theme?.typography?.body2,
        },
      }}
      max={max}
      total={selectedUsers?.length}
    >
      {selectedUsers?.map((user: any) => (
        <DynamicAvatar
          key={user?._id}
          avatarSrc={user?.avatar?.url ?? user?.avatar}
          nameInitial={getInitials(user?.firstName, user?.lastName)}
          tooltipTitle={getFullName(user?.firstName, user?.lastName)}
          width={width}
          height={height}
          variant={variant}
        />
      ))}
    </AvatarGroup>
  );
};
