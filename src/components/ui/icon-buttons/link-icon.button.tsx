import { IconButton } from "@/libs";
import Link from "next/link";

export const LinkIconButton = (props: any) => {
  const { Icon, width, height, color, hoverColor, link = "#" } = props;

  return (
    <Link href={link}>
      <IconButton>
        <Icon
          width={width}
          height={height}
          color={color}
          cursor="pointer"
          hoverColor={hoverColor}
        />
      </IconButton>
    </Link>
  );
};
