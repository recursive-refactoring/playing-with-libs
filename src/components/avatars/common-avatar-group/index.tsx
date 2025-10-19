import { AvatarGroup } from "@mui/material";
import { CommonAvatarGroupPropsI } from "../avatars.interface";
import { DynamicAvatar } from "../dynamic-avatar";
import { fullNameInitial } from "@/utils/avatars";
import { fullName } from "@/utils/string-transformation";

export const CommonAvatarGroup = (props: CommonAvatarGroupPropsI) => {
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
          nameInitial={fullNameInitial(user?.firstName, user?.lastName)}
          tooltipTitle={fullName(user?.firstName, user?.lastName)}
          width={width}
          height={height}
          variant={variant}
        />
      ))}
    </AvatarGroup>
  );
};
