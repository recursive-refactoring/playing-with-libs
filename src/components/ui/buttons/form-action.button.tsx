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
  } = props;

  return (
    <HorizontalStack
      alignItems="center"
      justifyContent={justifyContent}
      spacing={1}
    >
      <LoadingButton
        primary={false}
        onClick={handleCancelButton}
        disabled={disabledCancelButton}
      >
        {cancelButtonText}
      </LoadingButton>
      <LoadingButton
        type="submit"
        loading={showSubmitLoader}
        disabled={disabledSubmitButton}
        onClick={handleSubmitButton}
      >
        {submitButtonText}
      </LoadingButton>
    </HorizontalStack>
  );
};
