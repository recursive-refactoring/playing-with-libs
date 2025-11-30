import { PROJECT_NAME } from "@/configs/env.config";
import { AVATAR_VARIANTS } from "@/constants/ui.constant";
import { DarkLogo, LightLogo } from "@/assets";
import { Avatar, Typography } from "@/libs";

export const LogoAvatar = (props: any) => {
  const {
    productName,
    isWhite = true,
    width = "100%",
    height = 28,
    variant = AVATAR_VARIANTS?.SQUARE,
  } = props;

  const Logo = isWhite ? LightLogo : DarkLogo;

  return (
    <>
      <Avatar
        alt={PROJECT_NAME}
        sx={{ width, height, objectFit: "cover" }}
        variant={variant}
      >
        <Logo />
      </Avatar>
      {!!productName && (
        <Typography
          component={"p"}
          sx={{
            color: "primary.main",
            textAlign: "right",
            fontWeight: "fontWeightBold",
          }}
        >
          {productName}
        </Typography>
      )}
    </>
  );
};
