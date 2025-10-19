"use client";

import { ARRAY_INDEX } from "@/constants/array";
import { API_MESSAGES } from "@/constants/messages";
import { toast } from "react-toastify";

export const successSnackbar = (message = API_MESSAGES?.SUCCESS) => {
  const toastMessage = Array?.isArray(message)
    ? message?.[ARRAY_INDEX?.ZERO]
    : message;
  return toast?.success(toastMessage);
};

export const errorSnackbar = (message = API_MESSAGES?.SOMETHING_WENT_WRONG) => {
  const toastMessage = Array?.isArray(message)
    ? message?.[ARRAY_INDEX?.ZERO]
    : message;
  return toast?.error(toastMessage);
};

export const infoSnackbar = (message = API_MESSAGES?.SUCCESS) => {
  const toastMessage = Array?.isArray(message)
    ? message?.[ARRAY_INDEX?.ZERO]
    : message;
  return toast?.info(toastMessage);
};

export const warningSnackbar = (
  message = API_MESSAGES?.SOMETHING_WENT_WRONG,
) => {
  const toastMessage = Array?.isArray(message)
    ? message?.[ARRAY_INDEX?.ZERO]
    : message;
  return toast?.warning(toastMessage);
};
