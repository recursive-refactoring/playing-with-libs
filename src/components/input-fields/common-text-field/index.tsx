"use client";
import { InputAdornment, TextField } from "@mui/material";
import FieldLabel from "../field-label";

export const CommonTextField = (props: any) => {
  const {
    label = "",
    variant = "outlined",
    size = "small",
    error = false,
    helperText = "",
    onBlur,
    onChange,
    value,
    fullWidth = true,
    startIcon = undefined,
    endIcon = undefined,
    placeholder,
    backgroundColor,
    borderRadius = 2,
    border,
    color,
    borderColor,
    name,
    ref,
    id = name,
    required = false,
    ...other
  } = props;

  return (
    <>
      {label && (
        <label htmlFor={name}>
          <FieldLabel label={label} required={required} />
        </label>
      )}
      <TextField
        label={""}
        variant={variant}
        size={size}
        error={error}
        value={value || ""}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        fullWidth={fullWidth}
        placeholder={placeholder}
        helperText={helperText}
        slotProps={{
          input: {
            startAdornment: startIcon ? (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ) : undefined,
            endAdornment: endIcon ? (
              <InputAdornment position="end">{endIcon}</InputAdornment>
            ) : undefined,
          },
        }}
        {...other}
        sx={{
          backgroundColor,
          borderRadius,
          border,
          borderColor,
          "& .MuiTextField-root": {
            border,
            borderColor,
            borderRadius,
            color,
          },
          "& .MuiInputBase-root": {
            border,
            color,
            borderRadius,
          },
          "& fieldset": { border },
        }}
      />
    </>
  );
};

export default CommonTextField;
