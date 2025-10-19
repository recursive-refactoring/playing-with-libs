"use client";

import { useFormLib } from "@/hooks/use-form-lib";
import {
  dataToSendObject,
  dynamicFieldKeys,
  dynamicFieldsComparer,
  dynamicFieldsDataTwo,
  fieldArray,
  fieldKey,
  fieldValue,
  formData,
  signinFormDefaultValues,
  signinFormFieldDynamic,
  signinFormValidationSchema,
  signinValidationSchema,
  singleData,
} from "./components.data";
import { useEffect, useState } from "react";
import { errorSnackbar } from "@/libs/snackbar";
import {
  generateDynamicFieldsPayload,
  generateDynamicForm,
} from "@/utils/dynamic-fields";
import { filteredEmptyValues } from "@/utils/objects";

export const useComponents = () => {
  const dataToGet = { _id: "12313131" };
  const [mockBe, setMockBe] = useState<any>({});
  const promiseData = new Promise((resolve, reject) =>
    setTimeout(() => resolve(singleData), 2000),
  );
  const backData = async () => {
    try {
      const res = await promiseData;
      setMockBe(res);
      return res;
    } catch (error) {
    } finally {
    }
  };

  backData();

  // const data = fieldArray?.map((field: any) => {
  //   const payload: any = {};
  //   payload[fieldValue] = formData?.[field?.[fieldKey]];
  //   for (const key in dataToSendObject) {
  //     if (key === fieldValue) {
  //       payload[key] = formData?.[field?.[dataToSendObject?.[key]]];
  //       continue;
  //     }
  //     payload[key] = field?.[dataToSendObject?.[key]];
  //   }
  //   return payload;
  // });
  const data = generateDynamicFieldsPayload(fieldArray, formData, {
    dataToSend: dataToSendObject,
    fieldValueKey: fieldValue,
  });
  console.log({ data });

  const [dynamicField, setDynamicField] = useState<any>();

  const { methods, handleSubmit, reset } = useFormLib({
    defaultValues: signinFormDefaultValues(dynamicField?.defaultValues),
    // validationSchema: signinFormValidationSchema(
    //   dynamicField?.validationSchemas,
    // ),
    validationSchema: signinValidationSchema,
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  const onTypeChangeHandler = async (_: any, newValue: any, onChange: any) => {
    if (newValue === null) {
      onChange(newValue);
      setDynamicField({});
      return;
    }
    try {
      onChange(newValue);
      const results = generateDynamicForm(
        dynamicFieldsDataTwo,
        dynamicFieldsComparer,
        dynamicFieldKeys,
      );

      setDynamicField(results);
    } catch (error: any) {
      errorSnackbar(error?.data?.message ?? "something went wrong");
    }
  };

  // useEffect(() => {
  //   reset((previousData: any) => {
  //     const filteredData = filteredEmptyValues(previousData);
  //     const formDefaultValues =
  //       dataToGet?._id && !Object?.keys(filteredData ?? {})?.length
  //         ? mockBe
  //         : previousData;
  //     return signinFormDefaultValues(
  //       dynamicField?.defaultValues,
  //       formDefaultValues,
  //     );
  //   });
  // }, [dynamicField?.defaultValues, reset]);

  useEffect(() => {
    if (dataToGet?._id) {
      setDynamicField(
        generateDynamicForm(
          mockBe?.fields,
          dynamicFieldsComparer,
          dynamicFieldKeys,
        ),
      );
    }
  }, [mockBe]);

  const signinFormField = signinFormFieldDynamic(onTypeChangeHandler);

  return {
    methods,
    onSubmit,
    handleSubmit,
    signinFormField,
    dynamicField,
  };
};
