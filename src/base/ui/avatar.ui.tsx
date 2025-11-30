import { Avatar as AvatarUi } from "@mui/material";

export const Avatar = (props: any) => {
  const {
    children,
    src,
    srcSet,
    alt,
    sizes,
    customStyles,
    slots,
    slotProps,
    component,
    variant,
  } = props;

  return (
    <AvatarUi
      src={src}
      srcSet={srcSet}
      alt={alt}
      sizes={sizes}
      sx={customStyles}
      slots={slots}
      slotProps={slotProps}
      component={component}
      variant={variant}
    >
      {children}
    </AvatarUi>
  );
};
