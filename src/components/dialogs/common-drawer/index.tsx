import { UIHighlightOffOutlinedIcon } from "@/assets/ui-icons";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { SubHeadingText } from "@/components/text/sub-heading-text";
import { pxToRem } from "@/utils/styles";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
} from "@mui/material";

export const CommonDrawer = (props: any) => {
  const {
    isPortalOpen,
    closePortal,
    anchor = "right",
    variant = "temporary",
    drawerTitle = "",
    drawerTitleColor = "primary.main",
    disabledCancelButton = false,
    showSubmitLoader = false,
    handleSubmitButton,
    handleCancelButton = closePortal,
    cancelButtonText = "Cancel",
    submitButtonText = "Submit",
    showActionButtons = true,
    disabledSubmitButton = showSubmitLoader,
    showCancelButton = true,
    submitButtonStyles,
    cancelButtonStyles,
    isCapital = true,
    canClose = true,
    titlePosition = "flex-start",
    submitBtnFull = false,
    cancelBtnFull = false,
    showSubmitButton = true,
    children,
  } = props;

  return (
    <Drawer
      open={isPortalOpen}
      onClose={closePortal}
      anchor={anchor}
      variant={variant}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: { sm: pxToRem(500), xs: "100vw" },
        }}
      >
        <DialogTitle component="div" sx={{ padding: 2 }}>
          <FlexLayout justifyContent={"space-between"} mb={1.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                gap: 1,
                flexWrap: "wrap",
                justifyContent: titlePosition,
              }}
            >
              <SubHeadingText
                isCapital={isCapital}
                variant="subtitle1"
                color={drawerTitleColor}
              >
                {drawerTitle}
              </SubHeadingText>
            </Box>
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

        <DialogContent sx={{ padding: 2 }}>{children}</DialogContent>
        {showActionButtons && (
          <DialogActions sx={{ padding: 2 }}>
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
            {showSubmitButton && (
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
            )}
          </DialogActions>
        )}
      </Box>
    </Drawer>
  );
};
