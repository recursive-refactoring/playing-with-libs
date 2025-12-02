import { useFlatDropdown } from "@/hooks/use-flat-dropdown";
import { DropdownIconButton } from "../ui";
import { EditIcon } from "@/assets";
import { Menu, MenuItem, Typography } from "@/libs";

export const FlatDropdownIconButton = (props: any) => {
  const {
    dropdownName = <EditIcon />,
    dropdownOptions,
    disabled,
    btnVariant = "outlined",
    menuSxProps,
    color,
    menuId = "demo-positioned-menu",
    menuLabel = "demo-positioned-button",
  } = props;

  const { anchorEl, open, handleClick, handleClose, handleMenuClick } =
    useFlatDropdown(props);

  return (
    <>
      <DropdownIconButton
        id={menuLabel}
        label={menuId}
        onClick={handleClick}
        variant={btnVariant}
        color={color}
        disabled={disabled}
        dropdownName={dropdownName}
      >
        <Menu
          menuId={menuId}
          menuLabel={menuLabel}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ padding: 2, ...menuSxProps }}
        >
          {dropdownOptions?.map((singleOption: any) => (
            <MenuItem
              key={singleOption?._id}
              disabled={singleOption?.disabled}
              onClick={handleMenuClick}
              sx={{
                cursor: "pointer",
                "&.MuiMenuItem-root": {
                  marginBottom: { md: 0.5 },
                  marginX: { md: 0.5 },
                },
              }}
            >
              <Typography
                variant="body2"
                fontWeight={"fontWeightMedium"}
                sx={singleOption?.titleSx}
              >
                {singleOption?.title}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </DropdownIconButton>
    </>
  );
};
