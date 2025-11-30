import { UI_MESSAGES } from "@/constants/messages.constant";
import { Box, Typography } from "@mui/material";
import { StaticAvatar } from "@/components/ui/avatars/static-avatar";
import { UiNoPageFoundStatePropsI } from "../ui-status-states.interface";

const UiNoPageFoundState = (props: UiNoPageFoundStatePropsI) => {
  const {
    image = "",
    message = UI_MESSAGES?.NO_PAGE_FOUND,
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

export default UiNoPageFoundState;
