import SingleAutocompleteField from "@/components/input-fields/single-autocomplete-field";
import { useCallback, useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const SingleAutocompleteASyncFormField = (props: any) => {
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
    getOptionLabel = (option: any) => option?.name ?? option?.label,
    groupBy = (option: any) => option?.groupBy,
    customOnChangeHandler = undefined,
    apiQuery,
    queryKey = "search",
    externalParams = {},
    debounceTime = 500,
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

  const [trigger, { data, isLoading, isFetching }]: any = apiQuery;
  const [debounceTimeout, setDebounceTimeout] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const triggerWithDebounce = useCallback(
    (newInputValue: string) => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      const timeout = setTimeout(() => {
        trigger({ params: { [queryKey]: newInputValue, ...externalParams } });
      }, debounceTime);
      setDebounceTimeout(timeout);
    },
    [debounceTimeout, queryKey, externalParams, debounceTime, trigger],
  );

  useEffect(() => {
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

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
            open={open}
            onOpen={() => {
              setOpen(true);
              return;
              trigger({ params: { ...externalParams } });
            }}
            onClose={() => {
              setOpen(false);
            }}
            onBlur={field?.onBlur}
            options={
              data || [
                {
                  _id: 1,
                  name: "d",
                },
                { _id: 2, name: "f" },
              ]
            }
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
            onInputChange={(event: any, newInputValue: any) => {
              triggerWithDebounce(newInputValue);
            }}
          />
        );
      }}
    />
  );
};

export default SingleAutocompleteASyncFormField;
