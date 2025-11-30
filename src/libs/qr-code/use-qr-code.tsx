import { getThemeColor } from "@/utils/theme.util";
import { useTheme } from "@mui/material";
import { useQRCode as useQRCodeLib } from "next-qrcode";

export const useQRCode = (props: any) => {
  const { darkColor, lightColor } = props;

  const theme = useTheme();
  const { Canvas } = useQRCodeLib();

  const dark = getThemeColor(theme, darkColor);
  const light = getThemeColor(theme, lightColor);

  return {
    Canvas,
    dark,
    light,
  };
};
