import { Accordion as AccordionUI } from "@mui/material";

export const Accordion = (props: any) => {
  const {
    disabled,
    disableGutters,
    defaultExpanded,
    square,
    expanded,
    customStyles,
    children,
    onChange,
    dataProps,
  } = props;

  return (
    <AccordionUI
      defaultExpanded={defaultExpanded}
      disabled={disabled}
      disableGutters={disableGutters}
      square={square}
      expanded={expanded}
      onChange={onChange}
      sx={customStyles}
      {...dataProps}
    >
      {children}
    </AccordionUI>
  );
};
