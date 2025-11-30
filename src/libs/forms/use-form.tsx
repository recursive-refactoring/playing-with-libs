"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormLib } from "react-hook-form";

export const useForm = (props: any) => {
  const { defaultValues = {}, validationSchema } = props;

  const methods = useFormLib({
    defaultValues,
    ...(validationSchema
      ? {
          resolver: yupResolver(validationSchema),
        }
      : {}),
  });

  const {
    clearErrors,
    control,
    formState,
    getFieldState,
    getValues,
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
    setFocus,
    setValue,
    trigger,
    unregister,
    watch,
  } = methods;

  return {
    clearErrors,
    control,
    formState,
    getFieldState,
    getValues,
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
    setFocus,
    setValue,
    trigger,
    unregister,
    watch,
    methods,
  };
};
