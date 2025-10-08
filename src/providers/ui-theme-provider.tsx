"use client";

import { palette } from "@/theme/palette";
import { customShadows, shadows } from "@/theme/shadows";
import { typography } from "@/theme/typography";
import { Theme } from "@emotion/react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useTheme,
} from "@mui/material";

export const UiThemeProvider = (props: any) => {
  const { children } = props;
  const defaultTheme = useTheme();
  const themeOptions: Theme = {
    palette,
    typography,
    shadows: [...defaultTheme?.shadows, ...customShadows],
    spacing: 10,
  };

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          "& ::selection": {
            backgroundColor: theme?.palette?.primary?.main,
            color: theme?.palette?.common?.white,
          },
        })}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
