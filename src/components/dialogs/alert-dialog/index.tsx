import CommonDialog from "../../common/common-dialog";
import { ALERT_DIALOGS_TYPES } from "@/constants/alert";
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
      <>
        <StaticAvatar avatarSrc={""} isCenter width={50} height={50} />
        <BodyText variant="body1">{message}</BodyText>
      </>
    </CommonDialog>
  );
};
