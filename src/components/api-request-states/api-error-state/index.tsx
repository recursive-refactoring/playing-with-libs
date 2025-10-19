import { API_MESSAGES } from "@/constants/messages";
import { Box, Button, Typography } from "@mui/material";
import { ApiErrorStatePropsI } from "../api-request-states.interface";
import { StaticAvatar } from "@/components/avatars/static-avatar";

const ApiErrorState = (props: ApiErrorStatePropsI) => {
  const {
    height = "50vh",
    textColor = "slateBlue.main",
    message = API_MESSAGES?.SOMETHING_WENT_WRONG,
    children,
    refresh,
    canRefresh = false,
    refreshButtonProps,
  } = props;

  return (
    <Box
      height={height}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Box
        display={"grid"}
        sx={{
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <StaticAvatar avatarSrc={""} alt="Error" width="100%" height="100%" />
      </Box>
      <Typography variant="h5" color={textColor}>
        {message}
      </Typography>
      <br />
      {children}
      {canRefresh && (
        <Button
          className="small"
          variant="contained"
          onClick={refresh}
          {...refreshButtonProps}
        >
          Refresh
        </Button>
      )}
    </Box>
  );
};

export default ApiErrorState;
