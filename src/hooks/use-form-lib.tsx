"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useFormLib = (props: any) => {
  const { defaultValues = {}, validationSchema } = props;

  const methods = useForm({
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
