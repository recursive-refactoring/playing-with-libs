import MultipleAutocompleteField from "@/components/input-fields/multiple-autocomplete-field";
import { Controller, useFormContext } from "react-hook-form";

const MultipleAutocompleteSyncFormField = (props: any) => {
  const {
    name,
    label,
    options,
    required,
    noOptionsText = "Nothing in the List",
    placeholder,
    onChangeHandler,
    isOptionEqualToValue = (option: any, newValue: any) =>
      option?._id === newValue?._id,
    getOptionLabel = (option: any) => option?.label,
    groupBy = (option: any) => option?.groupBy,
    limitTags = 3,
  } = props;

  const { control } = useFormContext();

  const onChanged = (e: any, newValue: any, onChange: any) => {
    onChangeHandler?.(e, newValue, onChange);
    onChange(newValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <MultipleAutocompleteField
            name={field?.name}
            value={field?.value ?? []}
            onChange={(e: any, newValue: any) => {
              onChanged(e, newValue, field?.onChange);
            }}
            onBlur={field?.onBlur}
            options={options ?? []}
            noOptionsText={noOptionsText}
            groupBy={groupBy}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            id={name}
            label={label}
            error={!!error}
            placeholder={placeholder}
            required={required}
            errorMessage={error?.message}
            limitTags={limitTags}
          />
        );
      }}
    />
  );
};

export default MultipleAutocompleteSyncFormField;
