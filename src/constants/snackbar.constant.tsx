import { SnackBarConfigI, SnackbarVariantI } from "@/interfaces/snackbar";

export const SNACKBAR_VARIANTS: SnackbarVariantI = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
} as const;

export const SNACKBAR_CONFIG: SnackBarConfigI = {
  position: "top-center",
  autoClose: 5000,
} as const;
