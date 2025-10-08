export type SnackbarPositionType =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface SnackBarConfigI {
  position: SnackbarPositionType;
  autoClose: number;
}
