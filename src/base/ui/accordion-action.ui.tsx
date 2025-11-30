import { AccordionActions as AccordionActionsUi } from "@mui/material";

export const AccordionActions = (props: any) => {
  const { children, customStyles, disableSpacing } = props;

  return (
    <AccordionActionsUi disableSpacing={disableSpacing} sx={customStyles}>
      {children}
    </AccordionActionsUi>
  );
};
