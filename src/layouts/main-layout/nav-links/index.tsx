import { Typography } from "@mui/material";
import Link from "next/link";

export const NavLinks = (props: any) => {
  const { link = "#", isActive = false, name = "" } = props;
  return (
    <Link href={link}>
      <Typography
        variant="body2"
        sx={{
          color: isActive ? "text.secondary" : "common.border",
          fontWeight: isActive ? "fontWeightBold" : "fontWeightNormal",
          cursor: "pointer",
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};
