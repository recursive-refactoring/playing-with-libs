import { StaticAvatar } from "@/components/ui";
import { ALERT_DIALOGS_TYPES } from "@/constants/alert";
import { Dialog, Typography } from "@/libs";

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
    <Dialog
      isPortalOpen={isPortalOpen}
      cancelButtonText={cancelButtonText}
      submitButtonText={submitButtonText}
      closePortal={closePortal}
      isCenterContent
    >
      <>
        <StaticAvatar avatarSrc={""} isCenter width={50} height={50} />
        <Typography variant="body1">{message}</Typography>
      </>
    </Dialog>
  );
};
