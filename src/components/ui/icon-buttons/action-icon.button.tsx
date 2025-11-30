import { IconButton } from "@/libs";

export const ActionIconButton = (props: any) => {
  const { onClick, Icon, width, height, color, hoverColor } = props;

  return (
    <IconButton
      onClick={onClick}
      sx={{
        cursor: "pointer",
      }}
    >
      <Icon
        width={width}
        height={height}
        color={color}
        cursor="pointer"
        hoverColor={hoverColor}
      />
    </IconButton>
  );
};
