import { Stack as StackUi } from "@mui/material";

export const Stack = (props: any) => {
  const {
    children,
    component = "div",
    customStyles,
    direction = "column",
    useFlexGap = true,
    spacing = 0,
    divider = null,
    onClick = undefined,
    dataId = undefined,
    dataIndex = undefined,
    alignItems = "normal",
    justifyContent = "flex-start",
    flexGrow = 0,
    flexWrap = "nowrap",
    data,
    aria,
  } = props;

  return (
    <StackUi
      direction={direction}
      spacing={spacing}
      sx={{
        alignItems,
        justifyContent,
        flexGrow,
        flexWrap,
        ...customStyles,
      }}
      component={component}
      divider={divider}
      useFlexGap={useFlexGap}
      onClick={onClick}
      {...data}
      {...aria}
    >
      {children}
    </StackUi>
  );
};
