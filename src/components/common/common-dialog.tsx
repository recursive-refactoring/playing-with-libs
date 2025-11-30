"use client";

import { EditIcon } from "@/assets";
import { ActionIconButton, HorizontalStack } from "@/components/ui";
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
        <HorizontalStack justifyContent={"space-between"} mb={1.5}>
          {!!extraTitle && extraTitle}
          {canClose && (
            <ActionIconButton
              Icon={EditIcon}
              hasAction
              color="text.secondary"
              onClick={closePortal}
            />
          )}
        </HorizontalStack>
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
