import { EditIcon } from "@/assets";
import { IconButton } from "@/libs";

export const DropdownIconButton = (props: any) => {
  const {
    dropdownName = <EditIcon />,
    buttonLabel = `action`,
    disabled,
    btnVariant = "outlined",
    color = "secondary",
    children,
    isDropdownOpen,
    onBtnClick,
    id = "demo-positioned-button",
    label = "demo-positioned-menu",
  } = props;

  const aria = {
    "aria-controls": isDropdownOpen ? label : undefined,
    "aria-haspopup": "true",
    "aria-expanded": isDropdownOpen ? "true" : undefined,
  };

  return (
    <>
      <IconButton
        variant={btnVariant}
        id={id}
        aria={aria}
        onClick={onBtnClick}
        color={color}
        disabled={disabled}
        buttonLabel={buttonLabel}
        isCapital
      >
        {dropdownName}
      </IconButton>
      {children}
    </>
  );
};
