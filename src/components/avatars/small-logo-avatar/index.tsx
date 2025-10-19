import { Avatar, Box } from "@mui/material";
import { SmallLogoAvatarPropsI } from "../avatars.interface";
import { PROJECT_NAME } from "@/configs/env";

export const SmallLogoAvatar = (props: SmallLogoAvatarPropsI) => {
  const { width = "100%", height = 38, variant = "square" } = props;

  return (
    <Box>
      <Avatar
        src={""}
        alt={PROJECT_NAME}
        sx={{ width, height, objectFit: "cover" }}
        variant={variant}
      />
    </Box>
  );
};
