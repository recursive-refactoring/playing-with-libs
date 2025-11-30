import { AccordionDetails as AccordionDetailsUi } from "@mui/material";

export const AccordionDetails = (props: any) => {
  const { children, customStyles, disableSpacing } = props;

  return <AccordionDetailsUi sx={customStyles}>{children}</AccordionDetailsUi>;
};
