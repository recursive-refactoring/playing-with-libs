import { Avatar as AvatarUi } from "@mui/material";
import { useMemo } from "react";

export const DynamicAvatar = (props: any) => {
  const {
    nameInitial,
    avatarSrc,
    backgroundColor = avatarSrc ? "transparent" : "primary.main",
    customStyles,
    padding,
    width = 40,
    height = 40,
    variant = "circular",
    isCenter = false,
    boxShadow = 0,
    onClick = undefined,
    children,
    data,
    aria,
    id,
  } = props;

  const sx = useMemo(
    () => ({
      backgroundColor:
        backgroundColor ?? (avatarSrc ? "transparent" : "primary.main"),
      width: "100%",
      maxWidth: width,
      height,
      minWidth: { xs: "auto", sm: width },
      padding,
      margin: isCenter ? "auto" : undefined,
      boxShadow,
      ...customStyles,
    }),
    [
      backgroundColor,
      avatarSrc,
      width,
      height,
      padding,
      isCenter,
      boxShadow,
      customStyles,
    ],
  );

  return (
    <AvatarUi
      id={id}
      sx={sx}
      isStatic={false}
      variant={variant}
      avatarSrc={avatarSrc}
      nameInitial={nameInitial}
      onClick={onClick}
      {...data}
      {...aria}
    >
      {children}
    </AvatarUi>
  );
};
