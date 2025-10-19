import { Autocomplete, TextField } from "@mui/material";
import FieldLabel from "../field-label";
import { ErrorMessageField } from "../error-message-field";

export const MultipleAutocompleteField = (props: any) => {
  const {
    options = [],
    name,
    label,
    placeholder,
    error,
    value,
    onChange,
    onBlur,
    isOptionEqualToValue = (option: any, newValue: any) =>
      option?._id === newValue?._id,
    getOptionLabel = (option: any) => option?.label,
    groupBy = (option: any) => option?.groupBy,
    noOptionsText = "Nothing in the List",
    required = false,
    errorMessage = "",
    size = "small",
    limitTags = 3,
    ...others
  } = props;

  return (
    <Autocomplete
      options={options}
      name={name}
      value={value ?? []}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete
      noOptionsText={noOptionsText}
      groupBy={groupBy}
      multiple
      limitTags={limitTags}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      {...others}
      renderInput={(params) => (
        <>
          {label && (
            <label htmlFor={name}>
              <FieldLabel label={label} required={required} />
            </label>
          )}
          <TextField
            {...params}
            id={name}
            label={""}
            error={!!error}
            placeholder={placeholder}
            helperText={
              !!error && <ErrorMessageField>{errorMessage}</ErrorMessageField>
            }
            size={size}
          />
        </>
      )}
    />
  );
};

export default MultipleAutocompleteField;
