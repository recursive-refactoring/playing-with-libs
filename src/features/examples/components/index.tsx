"use client";
import { useComponents } from "./use-components";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { Box, Button, Stack, Typography } from "@mui/material";
import { StackLayout } from "@/components/layouts/stack-layout/StackLayout";
import { pxToRem } from "@/utils/styles";

export const ComponentsFeature = () => {
  const { methods, onSubmit, handleSubmit, signinFormField, dynamicField } =
    useComponents();

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <br />
      <Stack spacing={2}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Stack>
      <Typography variant="h5" gutterBottom>
        this is typo
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ marginBottom: pxToRem(8) }}>
        this is typo
      </Typography>
      <Typography variant="h5" gutterBottom>
        this is typo
      </Typography>
      <StackLayout useFlexGap spacing={2}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </StackLayout>
      <Box sx={{ gap: 2, display: "flex", flexDirection: "column" }}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};
