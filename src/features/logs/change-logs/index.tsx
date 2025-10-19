import { NewItemButton } from "@/components/buttons/new-item-button/NewItemButton";
import { HorizontalTabs } from "@/components/tabs/horizontal-tabs";
import { Box } from "@mui/material";
import { changeLogsTabData } from "./change-logs.data";

const ChangeLogsFeature = () => {
  return (
    <>
      <Box sx={{ textAlign: "end" }}>
        <NewItemButton hasStartIcon={false}>Add New Change</NewItemButton>
      </Box>
      <HorizontalTabs spacing={0.3} tabsDataArray={changeLogsTabData} />
    </>
  );
};

export default ChangeLogsFeature;
