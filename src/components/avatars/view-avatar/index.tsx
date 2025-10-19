import { Avatar } from "@mui/material";
import { ViewAvatarPropsI } from "../avatars.interface";
import { ATTACHMENT_FILE_TYPE } from "@/constants/file";
import { generateImage } from "@/utils/avatars";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { CommonDialog } from "@/components/dialogs/common-dialog";

const ViewAvatar = (props: ViewAvatarPropsI) => {
  const { isPortalOpen, setIsPortalOpen, avatarSrc, title, fileType } = props;

  const closeModal = () => setIsPortalOpen(false);

  if (fileType === ATTACHMENT_FILE_TYPE?.PDF)
    return (
      <CommonDialog
        isPortalOpen={isPortalOpen}
        closePortal={closeModal}
        dialogTitle={title}
        showActionButtons={false}
        dialogMaxWidth="md"
      >
        <iframe src={generateImage(avatarSrc)} width="100%" height="600" />
      </CommonDialog>
    );

  return (
    <CommonDialog
      isPortalOpen={isPortalOpen}
      closePortal={closeModal}
      dialogTitle={title}
      showActionButtons={false}
    >
      <Avatar
        src={generateImage(avatarSrc)}
        sx={{
          width: "100%",
          height: "100%",
        }}
        variant={AVATAR_VARIANTS?.SQUARE}
        alt={title}
      />
    </CommonDialog>
  );
};

export default ViewAvatar;
