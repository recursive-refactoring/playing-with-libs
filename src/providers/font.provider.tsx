import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const FontProvider = (props: any) => {
  const { children } = props;
  return <body className={`${dmSans.className}`}>{children}</body>;
};
