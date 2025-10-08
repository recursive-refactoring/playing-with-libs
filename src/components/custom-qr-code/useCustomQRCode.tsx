import { getThemeColor } from "@/utils/theme";
import { useTheme } from "@mui/material";
import { useQRCode } from "next-qrcode";

export const useCustomQRCode = (props: any) => {
  const { darkColor, lightColor } = props;
  const theme = useTheme();
  const { Canvas } = useQRCode();

  const dark = getThemeColor(theme, darkColor);
  const light = getThemeColor(theme, lightColor);

  return {
    Canvas,
    dark,
    light,
  };
};
