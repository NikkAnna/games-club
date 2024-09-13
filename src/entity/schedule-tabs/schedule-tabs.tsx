import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export type TSheduleTabsProps = {
  gameTypes: string[];
  tabsOnChange: (event: React.SyntheticEvent, newValue: number) => void;
  typesTabsActive: number;
};

export const ScheduleTabs = ({
  gameTypes,
  tabsOnChange,
  typesTabsActive
}: TSheduleTabsProps) => {
  const handleClick = () => {};

  return (
    <Box sx={{ width: '100%' }}>
      <style>
        {`
            .MuiTab-root {
                color: white;
            }

            .MuiTab-root:hover {
                color: grey;
            }

            .MuiTab-root.Mui-selected {
                color: #FC411E;
            }
            .MuiTabs-indicator {
                background-color: #FC411E;
            }
            `}
      </style>
      <Tabs
        value={typesTabsActive}
        onChange={tabsOnChange}
        indicatorColor='secondary'
      >
        {gameTypes.map((type, index) => (
          <Tab key={index} value={index} label={type} onClick={handleClick} />
        ))}
      </Tabs>
    </Box>
  );
};
