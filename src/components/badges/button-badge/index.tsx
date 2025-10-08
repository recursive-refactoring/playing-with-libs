import { CommonIconButton } from "@/components/buttons/common-icon-button";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { CameraAlt } from "@mui/icons-material";
import { Badge } from "@mui/material";

export const ButtonBadge = (props: any) => {
  const { children, onClick = undefined } = props;

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <CommonIconButton
          customStyles={{ backgroundColor: "primary.main", borderRadius: 2 }}
          onClick={onClick}
        >
          <CommonIcon Icon={CameraAlt} color="common.white" />
        </CommonIconButton>
      }
    >
      {children}
    </Badge>
  );
};
