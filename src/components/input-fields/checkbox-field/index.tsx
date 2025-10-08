import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckboxFieldPropsI } from "../input-fields.interface";
import FieldLabel from "../field-label";

export const CheckboxField = (props: CheckboxFieldPropsI) => {
  const {
    checked,
    onChange,
    label,
    name = label,
    id = name,
    ariaLabel = label,
    disabled = false,
  } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          color={"primary"}
          name={name}
          checked={checked}
          onChange={onChange}
          id={id}
          disabled={disabled}
          inputProps={{
            "aria-label": ariaLabel,
          }}
        />
      }
      label={
        !!label && (
          <label htmlFor={name}>
            <FieldLabel label={label} marginBottom={0} />
          </label>
        )
      }
    />
  );
};
