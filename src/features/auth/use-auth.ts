"use client";
import { useFormLib } from "@/hooks/use-form-lib";
import {
  authFormDefaultValues,
  authFormFieldsDynamic,
  authFormValidationSchema,
} from "./auth.data";
import { useState } from "react";
import { useReferenceTracker } from "@/hooks/use-reference-tracker";
import { usePatchTabMutation, usePostTabMutation } from "@/services/some";

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
  const [trigger] = usePostTabMutation();

  const [trigger2] = usePatchTabMutation();

  const post = async () => {
    try {
      await trigger({ id: 1 })?.unwrap();
    } catch (error) {}
  };

  const post2 = async () => {
    try {
      await trigger2({ body: { id: 33 }, id: "pp" })?.unwrap();
    } catch (error) {}
  };

  return {
    authFormFields,
    methods,
    onSubmit,
    handleSubmit,
    changingState,
    post,
    post2,
  };
};
