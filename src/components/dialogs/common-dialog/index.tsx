"use client";

import { UIHighlightOffOutlinedIcon } from "@/assets/ui-icons";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

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
      <DialogTitle component="div" sx={{ padding: 2 }}>
        <FlexLayout justifyContent={"space-between"} mb={1.5}>
          <Box
            display={"flex"}
            alignItems={"center"}
            flex={1}
            gap={1}
            flexWrap={"wrap"}
            justifyContent={titlePosition}
          >
            <SubHeadingText
              isCapital={isCapital}
              variant="subtitle1"
              color="primary.main"
            >
              {dialogTitle}
            </SubHeadingText>
          </Box>
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
        sx={{ padding: 2, textAlign: isCenterContent ? "center" : "left" }}
      >
        {children}
      </DialogContent>
      {showActionButtons && (
        <DialogActions
          sx={{
            paddingTop: `0 !important`,
            paddingX: 2,
            paddingBottom: 2,
            justifyContent: isCenterContent ? "center" : "flex-end",
          }}
        >
          {showCancelButton && (
            <CommonLoadingButton
              className="small"
              type="button"
              primary={false}
              fullWidth={cancelBtnFull}
              onClick={handleCancelButton}
              disabled={disabledCancelButton}
              customStyles={cancelButtonStyles}
            >
              {cancelButtonText}
            </CommonLoadingButton>
          )}
          <CommonLoadingButton
            className="small"
            type="submit"
            fullWidth={submitBtnFull}
            onClick={handleSubmitButton}
            loading={showSubmitLoader}
            disabled={disabledSubmitButton}
            customStyles={submitButtonStyles}
          >
            {submitButtonText}
          </CommonLoadingButton>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CommonDialog;
