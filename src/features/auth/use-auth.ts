"use client";
import { useFormLib } from "@/hooks/use-form-lib";
import {
  authFormDefaultValues,
  authFormFieldsDynamic,
  authFormValidationSchema,
} from "./auth.data";
import { useState } from "react";
import { useReferenceTracker } from "@/hooks/use-reference-tracker";

export const useAuth = () => {
  const [changeState, setChangeState] = useState(0);

  const { methods, handleSubmit } = useFormLib({
    validationSchema: authFormValidationSchema(),
    defaultValues: authFormDefaultValues(),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const authFormFields = authFormFieldsDynamic?.();

  const changingState = () => {
    const random = Math.random() * 100;
    setChangeState(random);
  };

  // console.log({ changeState });

  // useReferenceTracker("Parent", [
  //   changeState,
  //   methods,
  //   authFormValidationSchema,
  //   authFormDefaultValues,
  //   useFormLib,
  //   onSubmit,
  //   changingState,
  //   authFormFields,
  // ]);

  return {
    authFormFields,
    methods,
    onSubmit,
    handleSubmit,
    changingState,
  };
};
