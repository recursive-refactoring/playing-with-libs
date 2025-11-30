"use client";

import { FormProvider as CustomFormProvider } from "react-hook-form";

export const FormProvider = (props: any) => {
  const { children, onSubmit, methods } = props;
  return (
    <CustomFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </CustomFormProvider>
  );
};
