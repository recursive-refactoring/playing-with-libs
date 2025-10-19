"use client";
import { InputAdornment, TextField } from "@mui/material";
import FieldLabel from "../field-label";

const CommonTextAreaField = (props: any) => {
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
    rows = 3,
    required = false,
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
        multiline
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        fullWidth={fullWidth}
        placeholder={placeholder}
        helperText={helperText}
        rows={rows}
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

export default CommonTextAreaField;
