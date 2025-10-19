import { Typography } from "@mui/material";
import { FieldLabelPropsI } from "../input-fields.interface";

const FieldLabel = (props: FieldLabelPropsI) => {
  const { label, required = false, marginBottom = 0.6 } = props;

  return (
    <Typography
      sx={{
        color: "text.secondary",
        marginBottom: marginBottom,
      }}
    >
      {label}
      {required && (
        <Typography
          component="span"
          sx={{ lineHeight: "1", color: "error.main" }}
        >
          {" "}
          *{" "}
        </Typography>
      )}
    </Typography>
  );
};

export default FieldLabel;
