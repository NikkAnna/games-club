import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export type TSheduleTabsProps = {
  gameTypes: string[];
}
export const ScheduleTabs = ({gameTypes}: TSheduleTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
    console.log(value);
  };

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
        <Tabs value={value} onChange={handleChange} indicatorColor='secondary'>
        {gameTypes.map((type, index) => (
          <Tab key={index} value={index} label={type} onClick={handleClick} />
          ))
        }
        </Tabs>
    </Box>
  );
};
