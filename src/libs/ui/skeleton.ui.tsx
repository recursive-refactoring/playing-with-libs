import { Skeleton as SkeletonUi } from "@mui/material";

export const Skeleton = (props: any) => {
  const {
    animation,
    variant,
    width,
    height,
    customStyles,
    children,
    component,
    data,
    aria,
  } = props;

  return (
    <SkeletonUi
      animation={animation}
      variant={variant}
      width={width}
      height={height}
      component={component}
      sx={customStyles}
      {...data}
      {...aria}
    >
      {children}
    </SkeletonUi>
  );
};
