import { CardMedia as UICardMedia } from "@mui/material";

export const CardMedia = (props: any) => {
  const { children, customStyles, component = "img", image, alt } = props;

  return (
    <UICardMedia
      image={image}
      component={component}
      sx={customStyles}
      alt={alt}
    >
      {children}
    </UICardMedia>
  );
};
