"use client";

import { SNACKBAR_CONFIG } from "@/constants";
import { ToastContainer } from "react-toastify";

export const SnackBarProvider = (props: any) => {
  const { children } = props;
  return (
    <>
      {children}
      <ToastContainer
        position={SNACKBAR_CONFIG?.position}
        autoClose={SNACKBAR_CONFIG?.autoClose}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
    </>
  );
};
