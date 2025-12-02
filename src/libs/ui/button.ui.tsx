import { Button as ButtonUi } from "@mui/material";

export const Button = (props: any) => {
  const {
    loading,
    children,
    buttonLabel,
    endIcon,
    onClick,
    primary = false,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    disabled = false,
    fullWidth = false,
    customStyles,
    type = "button",
    startIcon,
    data,
    aria,
  } = props;

  return (
    <ButtonUi
      aria-label={buttonLabel}
      loading={loading}
      endIcon={endIcon}
      disableElevation
      variant={variant}
      color={color}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={customStyles}
      type={type}
      {...data}
      {...aria}
    >
      {children}
    </ButtonUi>
  );
};
