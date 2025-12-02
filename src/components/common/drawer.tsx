import {
  ActionIconButton,
  FormActionsButtons,
  HorizontalStack,
  VerticalStack,
} from "../ui";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer as DrawerBase,
  Typography,
} from "@/libs";
import { EditIcon } from "@/assets";
import { pxToRem } from "@/utils";

export const Drawer = (props: any) => {
  const {
    isPortalOpen,
    closePortal,
    anchor = "right",
    variant = "temporary",
    disabledCancelButton = false,
    showSubmitLoader = false,
    handleSubmitButton,
    handleCancelButton = closePortal,
    cancelButtonText = "Cancel",
    submitButtonText = "Submit",
    showActionButtons = true,
    disabledSubmitButton = showSubmitLoader,
    showCancelButton = true,
    canClose = true,
    showSubmitButton = true,
    children,
    title,
    isCenterContent,
  } = props;

  return (
    <DrawerBase
      isDrawerOpen={isPortalOpen}
      onDrawerClose={closePortal}
      anchor={anchor}
      variant={variant}
    >
      <VerticalStack
        customStyles={{
          display: "flex",
          flexDirection: "column",
          width: { sm: pxToRem(500), xs: "100vw" },
        }}
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
      </VerticalStack>
    </DrawerBase>
  );
};
