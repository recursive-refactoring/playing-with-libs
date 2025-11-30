import { DynamicAvatar } from "@/components/avatars/dynamic-avatar";
import { FlexLayout } from "@/components/ui/grids/flex-layout";
import { Box, Typography } from "@mui/material";

export const UserInfo = (props: any) => {
  const {
    color = "common.white",
    variant = "body1",
    avatarBackgroundColor = color,
    isRight = true,
  } = props;

  return (
    <FlexLayout>
      {isRight && (
        <Box>
          <Typography variant={variant} sx={{ color }}>
            HI Martin K
          </Typography>
        </Box>
      )}

      <DynamicAvatar
        avatarSrc=""
        nameInitial="MK"
        backgroundColor={avatarBackgroundColor}
      />
      {!isRight && (
        <Box>
          <Typography variant={variant} sx={{ color }}>
            HI Martin K
          </Typography>
        </Box>
      )}
    </FlexLayout>
  );
};
