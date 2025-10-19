import { ONE_REM_TO_PX } from "@/constants/styles";

export const pxToRem = (fontSize: any) => {
  const rem = fontSize / ONE_REM_TO_PX;
  return `${rem}rem`;
};
