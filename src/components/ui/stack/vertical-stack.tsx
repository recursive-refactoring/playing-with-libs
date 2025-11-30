import { Stack } from "@/libs";

export const VerticalStack = (props: any) => {
  const {
    customStyles,
    spacing = 0,
    children,
    alignItems = "normal",
    justifyContent = "flex-start",
    flexGrow = 0,
    flexWrap = "nowrap",
    isReverse = false,
  } = props;

  const direction = isReverse ? "column-reverse" : "column";

  return (
    <Stack
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexGrow={flexGrow}
      flexWrap={flexWrap}
      sx={customStyles}
    >
      {children}
    </Stack>
  );
};
