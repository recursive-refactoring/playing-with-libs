"use client";

import { FormGrid } from "@/components/grids/form-grid";
import { useAuth } from "./use-auth";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { CommonButton } from "@/components/buttons/common-button";

export const AuthFeature = () => {
  const { authFormFields, methods,post, post2, onSubmit, handleSubmit, changingState } =
    useAuth();
  return (
    <>
      <CommonButton type="submit" primary onClick={post}>
          Submit
        </CommonButton>
      {/* <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FormGrid formFieldsList={authFormFields} />
        <br />
        <CommonButton type="submit" primary>
          Submit
        </CommonButton>
      </CustomFormProvider>
      <br />
      <CommonButton primary onClick={changingState}>
        Change
      </CommonButton> */}
    </>
  );
};

export default AuthFeature;
