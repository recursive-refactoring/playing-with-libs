"use client";

import { UIHighlightOffOutlinedIcon } from "@/assets/ui-icons";
import { CommonLoadingButton } from "@/components/ui/buttons/loading.button";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { FlexLayout } from "@/components/ui/grids/flex-layout";
import { SubHeadingText } from "@/components/ui/text/sub-heading-text";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@/libs";

export const CommonDialog = (props: any) => {
  const {
    isPortalOpen = false,
    closePortal,
    dialogTitle = "",
    children,
    disabledCancelButton = false,
    showSubmitLoader = false,
    handleSubmitButton,
    handleCancelButton = closePortal,
    cancelButtonText = "Cancel",
    submitButtonText = "Submit",
    showActionButtons = true,
    dialogMaxWidth = "sm",
    disabledSubmitButton = showSubmitLoader,
    showCancelButton = true,
    submitButtonStyles,
    cancelButtonStyles,
    isCapital = true,
    canClose = true,
    extraTitle,
    titlePosition = "flex-start",
    submitBtnFull = false,
    cancelBtnFull = false,
    isCenterContent = false,
  } = props;

  return (
    <Dialog
      open={isPortalOpen}
      onClose={closePortal}
      maxWidth={dialogMaxWidth}
      fullWidth
    >
      <DialogTitle component="div" customStyles={{ padding: 2 }}>
        <FlexLayout justifyContent={"space-between"} mb={1.5}>
          {!!extraTitle && extraTitle}
          {canClose && (
            <CommonIcon
              Icon={UIHighlightOffOutlinedIcon}
              hasAction
              color="text.secondary"
              onClick={closePortal}
            />
          )}
        </FlexLayout>
      </DialogTitle>
      <DialogContent
        customStyles={{
          padding: 2,
          textAlign: isCenterContent ? "center" : "left",
        }}
      >
        {children}
      </DialogContent>
      {showActionButtons && (
        <DialogActions
          customStyles={{
            paddingTop: `0 !important`,
            paddingX: 2,
            paddingBottom: 2,
            justifyContent: isCenterContent ? "center" : "flex-end",
          }}
        ></DialogActions>
      )}
    </Dialog>
  );
};

export default CommonDialog;
