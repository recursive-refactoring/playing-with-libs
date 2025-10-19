import { CheckboxField } from "@/components/input-fields/checkbox-field";
import { Controller, useFormContext } from "react-hook-form";

const SingleCheckboxFormField = (props: any) => {
  const { name, label, disabled = false } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <CheckboxField
            name={field?.name}
            checked={field?.value}
            onChange={field?.onChange}
            label={label}
            ariaLabel={name}
            disabled={disabled}
          />
        );
      }}
    />
  );
};

export default SingleCheckboxFormField;
