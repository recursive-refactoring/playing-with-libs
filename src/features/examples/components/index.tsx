"use client";
import { useComponents } from "./use-components";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { Box, Button } from "@mui/material";

export const ComponentsFeature = () => {
  const { methods, onSubmit, handleSubmit, signinFormField, dynamicField } =
    useComponents();

  return (
    <Box>
      <br />
      <Box
        sx={{
          backgroundColor: "primary.light",
          padding: 2,
          maxWidth: "sm",
          margin: "auto",
          borderRadius: 2,
        }}
      >
        <CustomFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <FormGrid formFieldsList={signinFormField} />
          <FormGrid formFieldsList={dynamicField?.formFields} />
          <Button type="submit">Submit</Button>
        </CustomFormProvider>
        <br />
      </Box>
    </Box>
  );
};
