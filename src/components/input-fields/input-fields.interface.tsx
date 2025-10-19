export interface CheckboxFieldPropsI {
  checked?: boolean;
  onChange: (e: any) => void;
  label?: string;
  name?: string;
  id?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface FieldLabelPropsI {
  label?: string;
  required?: boolean;
  marginBottom?: number;
}
