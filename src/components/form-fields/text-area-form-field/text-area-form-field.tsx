"use client";
import { Controller, useFormContext } from "react-hook-form";
import CommonTextAreaField from "@/components/input-fields/common-text-area=field";
import { ErrorMessageField } from "@/components/input-fields/error-message-field";

export const TextAreaFormFields = (props: any) => {
  const { name, onBlurHandler, required = false, label, ...other } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <CommonTextAreaField
              {...field}
              id={name}
              label={label}
              value={field?.value || ""}
              onChange={field?.onChange}
              onBlur={() => {
                onBlurHandler?.();
                field?.onBlur?.();
              }}
              error={!!error}
              startIcon={other?.startIcon}
              endIcon={other?.endIcon}
              required={required}
              helperText={
                !!error && (
                  <ErrorMessageField>{error?.message}</ErrorMessageField>
                )
              }
              {...other}
            />
          </>
        );
      }}
    />
  );
};
