"use client";

import { snackBarConfig } from "@/configs/snackbar";
import { ToastContainer } from "react-toastify";

export const SnackBarProvider = (props: any) => {
  const { children } = props;
  return (
    <>
      {children}
      <ToastContainer
        position={snackBarConfig?.position}
        autoClose={snackBarConfig?.autoClose}
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
