import { AccordionDetails as AccordionDetailsUi } from "@mui/material";

export const AccordionDetails = (props: any) => {
  const { children, customStyles, data, aria } = props;

  return (
    <AccordionDetailsUi sx={customStyles} {...data} {...aria}>
      {children}
    </AccordionDetailsUi>
  );
};
