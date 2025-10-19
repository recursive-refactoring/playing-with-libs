"use client";

import { styles } from "./horizontal-tabs.style";
import { Box, Tab, Tabs } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { HorizontalTabsPropsI } from "../tabs.interface";

export const HorizontalTabs = (props: HorizontalTabsPropsI) => {
  const {
    tabsDataArray = [],
    variant = "scrollable",
    defaultValue = 0,
    orientation = "horizontal",
    handleTabChange,
  } = props;

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value !== defaultValue) setValue(defaultValue);
  }, [defaultValue, value]);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: number) => {
      handleTabChange?.(newValue);
      setValue(newValue);
    },
    [handleTabChange],
  );

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        selectionFollowsFocus
        orientation={orientation}
        variant={variant}
        sx={styles?.tabRoot}
        TabIndicatorProps={styles?.tabIndicator}
        defaultValue={defaultValue}
        allowScrollButtonsMobile
      >
        {tabsDataArray?.map((tab: any) => (
          <Tab
            wrapped
            disabled={tab?.disabled}
            sx={styles?.tabsStyle}
            key={tab?._id}
            label={tab?.name}
          />
        ))}
      </Tabs>
      <Box sx={{ py: { md: 2, xs: 0.5 } }}>
        {tabsDataArray?.map((child: any, index: number) => {
          return (
            <Box key={child?._id}>
              {value === index && (
                <>
                  <br />
                  <child.component {...child?.componentProps} />
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};
