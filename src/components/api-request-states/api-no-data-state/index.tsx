import { API_MESSAGES } from "@/constants/messages";
import { ApiNoDataStatePropsI } from "../api-request-states.interface";
import { Box, Typography } from "@mui/material";
import { StaticAvatar } from "@/components/avatars/static-avatar";

const ApiNoDataState = (props: ApiNoDataStatePropsI) => {
  const {
    image = "",
    message = API_MESSAGES?.NO_DATA_FOUND,
    children,
    height = "70vh",
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
      {!!image && (
        <Box
          display={"grid"}
          sx={{
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <StaticAvatar
            avatarSrc={image?.src}
            alt="Not Found"
            width="100%"
            height="100%"
          />
        </Box>
      )}
      <Typography variant="h6" mb={2} mt={1}>
        {message}
      </Typography>
      {children}
    </Box>
  );
};

export default ApiNoDataState;
