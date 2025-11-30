import { useFormContext as useFormContextLib } from "react-hook-form";

export const useFormContext = () => {
  const { control } = useFormContextLib();

  return {
    control,
  };
};
