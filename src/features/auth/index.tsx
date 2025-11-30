"use client";

import { FormGrid } from "@/components/grids/form-grid";
import { useAuth } from "./use-auth";
import { CustomFormProvider } from "@/providers/custom-form.provider";
import { CommonButton } from "@/components/ui/buttons/common-button";

export const AuthFeature = () => {
  const { authFormFields, methods, onSubmit, handleSubmit, changingState } =
    useAuth();
  return (
    <>
      <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormGrid formFieldsList={authFormFields} />
        <br />
        <CommonButton type="submit" primary>
          Submit
        </CommonButton>
      </CustomFormProvider>
      <br />
      <CommonButton primary onClick={changingState}>
        Change
      </CommonButton>
    </>
  );
};

export default AuthFeature;
