import { Theme } from "@mui/material";

export function getThemeColor(theme: Theme, fill: string): string {
  const [color, shade] = (fill?.split(".") as [string, string]) ?? ["", ""];
  return (
    (theme?.palette?.[color as keyof typeof theme.palette] as any)?.[shade] ??
    ""
  );
}
