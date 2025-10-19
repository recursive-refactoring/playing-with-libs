import { FlexLayout } from "@/components/layouts/flex-layout";
import Header from "./header";
import { Box } from "@mui/material";
import MenuBar from "./menu-bar";
import { PageHeader } from "./page-header";

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <FlexLayout
      flexDirection="column"
      alignItems="flex-start"
      minHeight="100vh"
    >
      <Box sx={{ width: "100%" }}>
        <Header />
      </Box>
      <Box sx={{ paddingX: 2 }}>
        <MenuBar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: "99%",
          backgroundColor: "common.white",
          boxShadow: 25,
          borderRadius: 2,
          margin: "auto",
          marginBottom: 1,
          paddingX: 2,
          paddingTop: 3,
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <PageHeader />
        </Box>
        {children}
      </Box>
    </FlexLayout>
  );
};
