import { generateImage } from "@/utils";
import { Avatar as AvatarUi } from "@mui/material";

export const Avatar = (props: any) => {
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
    isStatic = false,
    onClick = undefined,
    children,
  } = props;

  const avatarImage = isStatic ? avatarSrc?.src : generateImage(avatarSrc);

  return (
    <AvatarUi
      sx={{
        backgroundColor,
        width: "100%",
        maxWidth: width,
        height: height,
        minWidth: { xs: "auto", sm: width },
        padding,
        margin: isCenter ? "auto" : "",
        boxShadow,
        ...customStyles,
      }}
      variant={variant}
      src={avatarImage}
      alt={nameInitial}
      onClick={onClick}
    >
      {children}
    </AvatarUi>
  );
};
