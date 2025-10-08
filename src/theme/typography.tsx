import { pxToRem } from "@/utils/styles";

const FONT_FAMILY = "inherit";

export const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,
  h1: {
    fontSize: pxToRem(96),
  },
  h2: {
    fontSize: pxToRem(60),
  },
  h3: {
    fontSize: pxToRem(48),
  },
  h4: {
    fontSize: pxToRem(36),
  },
  h5: {
    fontSize: pxToRem(24),
  },
  h6: {
    fontSize: pxToRem(20),
  },
  subtitle1: {
    fontSize: pxToRem(18),
  },
  subtitle2: {
    fontSize: pxToRem(16),
  },
  body1: {
    fontSize: pxToRem(16),
  },
  body2: {
    fontSize: pxToRem(14),
  },
  caption: {
    fontSize: pxToRem(12),
  },
  pageTitled: {
    fontSize: pxToRem(23),
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    pageTitled: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    pageTitled?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pageTitled: true;
  }
}
