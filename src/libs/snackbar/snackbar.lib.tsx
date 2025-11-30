"use client";

import { API_MESSAGES } from "@/constants/messages.constant";
import { toast } from "react-toastify";

export const extractMessage = (message = "") => {
  const toastMessage = Array?.isArray(message) ? message?.[0] : message;
  return toastMessage;
};

export const successSnackbar = (message = API_MESSAGES?.SUCCESS) => {
  const toastMessage = extractMessage(message);
  return toast?.success(toastMessage);
};

export const errorSnackbar = (message = API_MESSAGES?.SOMETHING_WENT_WRONG) => {
  const toastMessage = extractMessage(message);
  return toast?.error(toastMessage);
};

export const infoSnackbar = (message = API_MESSAGES?.SUCCESS) => {
  const toastMessage = extractMessage(message);
  return toast?.info(toastMessage);
};

export const warningSnackbar = (
  message = API_MESSAGES?.SOMETHING_WENT_WRONG,
) => {
  const toastMessage = extractMessage(message);
  return toast?.warning(toastMessage);
};
