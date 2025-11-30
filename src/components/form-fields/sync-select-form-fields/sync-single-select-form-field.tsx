import SingleAutocompleteField from "@/components/input-fields/single-autocomplete-field";
import { Controller, useFormContext } from "react-hook-form";

export const SyncSingleSelectFormField = (props: any) => {
  const {
    name,
    label,
    options,
    required,
    noOptionsText = "Nothing in the List",
    placeholder,
    freeSolo = false,
    endAdornment = false,
    onChangeHandler,
    isOptionEqualToValue = (option: any, newValue: any) =>
      option?._id === newValue?._id,
    getOptionLabel = (option: any) => option?.label ?? option?.name,
    groupBy = (option: any) => option?.groupBy,
    customOnChangeHandler = undefined,
  } = props;

  const { control } = useFormContext();

  const onChanged = (e: any, newValue: any, onChange: any) => {
    if (customOnChangeHandler) {
      customOnChangeHandler?.(e, newValue, onChange);
      return;
    }
    onChangeHandler?.(e, newValue, onChange);
    onChange(newValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <SingleAutocompleteField
            name={field?.name}
            value={field?.value ?? null}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, field?.onChange);
            }}
            onBlur={field?.onBlur}
            options={options ?? []}
            noOptionsText={noOptionsText}
            groupBy={groupBy}
            freeSolo={freeSolo}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            id={name}
            label={label}
            error={!!error}
            placeholder={placeholder}
            required={required}
            errorMessage={error?.message}
            endAdornment={endAdornment}
          />
        );
      }}
    />
  );
};
