import { DATA_TYPES } from "@/constants/data-types.constant";
import { AVATAR_VARIANTS } from "@/constants/ui.constant";
import { pxToRem } from "@/utils/styles.util";
import { Avatar, Typography } from "@mui/material";
import { DynamicAvatarPropsI } from "../avatars.interface";
import { CommonTooltip } from "@/components/data-displays/common-tooltip";
import { generateImage } from "@/utils";

export const DynamicAvatar = (props: DynamicAvatarPropsI) => {
  const {
    nameInitial,
    avatarSrc,
    tooltipTitle,
    customTooltipProps,
    backgroundColor = "primary.main",
    customStyles,
    padding,
    initialColor = "grey.800",
    nameInitialsSize = 14,
    width = 40,
    height = 40,
    variant = AVATAR_VARIANTS?.CIRCULAR,
  } = props;

  const nameInitialSize: number =
    typeof height === DATA_TYPES?.STRING
      ? nameInitialsSize
      : (((height as number) / 3) as number);

  return (
    <CommonTooltip title={tooltipTitle} isCapital {...customTooltipProps}>
      <Avatar
        sx={{
          backgroundColor,
          width: width,
          height: height,
          padding,
          ...customStyles,
        }}
        variant={variant}
        src={generateImage(avatarSrc)}
        alt={nameInitial}
      >
        {!!nameInitial && (
          <Typography
            sx={{
              fontSize: pxToRem(nameInitialSize),
              color: initialColor,
              textTransform: "uppercase",
            }}
          >
            {nameInitial}
          </Typography>
        )}
      </Avatar>
    </CommonTooltip>
  );
};
