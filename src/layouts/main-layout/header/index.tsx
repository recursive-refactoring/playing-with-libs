import { LogoAvatar } from "@/components/avatars/logo-avatar";
import { UserInfo } from "@/components/data-displays/user-info";
import { SearchField } from "@/components/input-fields/search-field";
import { FlexLayout } from "@/components/layouts/flex-layout";
import { Notifications } from "@mui/icons-material";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        alignItems: "center",
        paddingX: 2,
        paddingY: 1,
      }}
    >
      <Box>
        <LogoAvatar />
      </Box>
      <Box>
        <SearchField />
      </Box>
      <FlexLayout>
        <Box>
          <Notifications sx={{ color: "common.white", cursor: "pointer" }} />
        </Box>
        <UserInfo />
      </FlexLayout>
    </Box>
  );
};

export default Header;
