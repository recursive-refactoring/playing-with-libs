"use client";

import { FlexLayout } from "@/components/layouts/flex-layout";

export const CommonIcon = (props: any) => {
  const {
    Icon = null,
    hasAction = false,
    customStyles,
    hoverStyles,
    handleAction,
    fontSize,
    color,
  } = props;

  if (!Icon) return;

  return (
    <FlexLayout justifyContent="center">
      <Icon
        fontSize={fontSize}
        onClick={handleAction}
        sx={{
          cursor: hasAction ? "pointer" : "",
          color,
          ...customStyles,
          "&:hover": {
            color,
            ...hoverStyles,
          },
        }}
      />
    </FlexLayout>
  );
};
