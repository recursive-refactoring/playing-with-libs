"use client";
import { Controller, useFormContext } from "react-hook-form";
import CommonTextFields from "@/components/input-fields/common-text-field";
import { ErrorMessageField } from "@/components/input-fields/error-message-field";

const TextFormFields = (props: any) => {
  const { name, onBlurHandler, required = false, label, ...other } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <CommonTextFields
              {...field}
              id={name}
              label={label}
              value={field?.value || ""}
              onChange={field?.onChange}
              onBlur={() => {
                onBlurHandler?.();
                field?.onBlur?.();
              }}
              required={required}
              error={!!error}
              startIcon={other?.startIcon}
              endIcon={other?.endIcon}
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

export default TextFormFields;
