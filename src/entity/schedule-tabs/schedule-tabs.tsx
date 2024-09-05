import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const ScheduleTabs = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
        <Tab value='one' label='Все игры' onClick={handleClick} />
        <Tab value='two' label='Городская мафия' onClick={handleClick} />
        <Tab value='three' label='Спортивная мафия' onClick={handleClick} />
      </Tabs>
    </Box>
  );
};
