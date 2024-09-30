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
    <div>
      <Box sx={{ width: '100%' }}>
        <style>
          {`

            .MuiTab-root {
                color: #000;
            }

            .MuiTab-root:hover {
                color: grey;
            }

            .MuiTab-root.Mui-selected {
                color: #fff;
                background-color: #FC411E;
                border-radius: 15px;

            }
            .MuiTabs-indicator {
                background-color: transparent;
            }
            `}
        </style>
        <Tabs
          value={typesTabsActive}
          onChange={tabsOnChange}
          indicatorColor='secondary'
          variant='scrollable'
          sx={{}}
        >
          {gameTypes.map((type, index) => (
            <Tab
              key={index}
              value={index}
              label={type}
              onClick={handleClick}
              sx={{
                fontSize: 'clamp(0.5625rem, 0.4583rem + 0.4444vw, 0.875rem)',
                fontFamily: 'cursive'
              }}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};
