"use client";

import { LoadingButton } from "./loading.button";
import { HorizontalStack } from "../stack";

export const FormActionsButtons = (props: any) => {
  const {
    handleSubmitButton,
    handleCancelButton,
    cancelButtonText = "Cancel",
    submitButtonText = "Submit",
    showSubmitLoader = false,
    disabledSubmitButton = showSubmitLoader,
    disabledCancelButton = showSubmitLoader,
    justifyContent = "flex-end",
    showCancelButton = true,
    showSubmitButton = true,
  } = props;

  return (
    <HorizontalStack
      alignItems="center"
      justifyContent={justifyContent}
      spacing={1}
    >
      {showCancelButton && (
        <LoadingButton
          primary={false}
          onClick={handleCancelButton}
          disabled={disabledCancelButton}
        >
          {cancelButtonText}
        </LoadingButton>
      )}
      {showSubmitButton && (
        <LoadingButton
          type="submit"
          loading={showSubmitLoader}
          disabled={disabledSubmitButton}
          onClick={handleSubmitButton}
        >
          {submitButtonText}
        </LoadingButton>
      )}
    </HorizontalStack>
  );
};
