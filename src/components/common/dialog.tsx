"use client";

import { EditIcon } from "@/assets";
import {
  ActionIconButton,
  FormActionsButtons,
  HorizontalStack,
} from "@/components/ui";
import {
  Dialog as DialogBase,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@/libs";

export const Dialog = (props: any) => {
  const {
    isPortalOpen = false,
    closePortal,
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
    canClose = true,
    title,
    isCenterContent = false,
    showSubmitButton = true,
  } = props;

  return (
    <DialogBase
      open={isPortalOpen}
      onClose={closePortal}
      maxWidth={dialogMaxWidth}
      fullWidth
    >
      <DialogTitle component="div" customStyles={{ padding: 2 }}>
        <HorizontalStack justifyContent={"space-between"} mb={1.5}>
          <Typography variant="h4">{title}</Typography>
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
        >
          <FormActionsButtons
            handleSubmitButton={handleSubmitButton}
            handleCancelButton={handleCancelButton}
            cancelButtonText={cancelButtonText}
            submitButtonText={submitButtonText}
            showSubmitLoader={showSubmitLoader}
            disabledSubmitButton={disabledSubmitButton}
            disabledCancelButton={disabledCancelButton}
            justifyContent="flex-end"
            showCancelButton={showCancelButton}
            showSubmitButton={showSubmitButton}
          />
        </DialogActions>
      )}
    </DialogBase>
  );
};
