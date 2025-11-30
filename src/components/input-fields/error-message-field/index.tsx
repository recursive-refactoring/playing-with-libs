import { UIInfoOutlinedIcon } from "@/assets/ui-icons";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { FlexLayout } from "@/components/ui/grids/flex-layout";
import { BodyText } from "@/components/ui/text/body-text";

export const ErrorMessageField = (props: any) => {
  const { children = "Required" } = props;
  return (
    <FlexLayout>
      <CommonIcon Icon={UIInfoOutlinedIcon} color="error.main" />
      <BodyText
        variant="caption"
        color="error.main"
        fontWeight="fontWeightMedium"
        component="span"
        isCapital={false}
      >
        {children}
      </BodyText>
    </FlexLayout>
  );
};
