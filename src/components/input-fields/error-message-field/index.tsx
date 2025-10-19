import { UIInfoOutlinedIcon } from "@/assets/ui-icons";
import { CommonIcon } from "@/components/icons/common-icon/common-icon";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { BodyText } from "@/components/text/body-text";

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
