import { Box } from "@mui/material";
import CommonDialog from "../common-dialog";
import { ALERT_DIALOGS_TYPES } from "@/constants/alert-dialog";
import { ALERT_DIALOGS_IMAGES } from "./alert-dialog.data";
import { BodyText } from "@/components/text/body-text";
import { StaticAvatar } from "@/components/avatars/static-avatar";

export const AlertDialog = (props: any) => {
  const {
    isPortalOpen,
    type = ALERT_DIALOGS_TYPES?.DELETE,
    message = "",
    cancelButtonText = "Cancel",
    submitButtonText = "Yes, Sure",
    closePortal = undefined,
  } = props;

  return (
    <CommonDialog
      isPortalOpen={isPortalOpen}
      cancelButtonText={cancelButtonText}
      submitButtonText={submitButtonText}
      closePortal={closePortal}
      isCenterContent
    >
      <Box>
        <StaticAvatar
          avatarSrc={ALERT_DIALOGS_IMAGES?.[type]}
          isCenter
          width={50}
          height={50}
        />
        <Box sx={{ my: 2 }}>
          <BodyText variant="body1">{message}</BodyText>
        </Box>
      </Box>
    </CommonDialog>
  );
};
