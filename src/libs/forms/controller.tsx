import { Controller as ControllerLib } from "react-hook-form";
import { useFormContext } from "./use-form-context";

export const Controller = (props: any) => {
  const { name, renderField } = props;

  const { control } = useFormContext();

  return (
    <ControllerLib
      name={name}
      control={control}
      render={(params: any): any => {
        renderField(params);
      }}
    />
  );
};
