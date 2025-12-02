import { AccordionSummary as AccordionSummaryUi } from "@mui/material";

export const AccordionSummary = (props: any) => {
  const {
    expandIcon,
    summaryKey,
    onMouseEnter,
    onMouseLeave,
    children,
    customStyles,
    data,
    aria,
  } = props;

  return (
    <AccordionSummaryUi
      expandIcon={expandIcon}
      aria-controls={`${summaryKey}-content`}
      id={`${summaryKey}-header`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={customStyles}
      {...aria}
      {...data}
    >
      {children}
    </AccordionSummaryUi>
  );
};
