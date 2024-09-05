import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const ScheduleHeaderItem = () => {
    
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const handleClick = () => {
        
    } 
  
    return (
      <Box sx={{ maxWidth: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="5.09 CP" onClick={handleClick}/>
          <Tab label="Item Two" onClick={handleClick}/>
          <Tab label="Item Three" onClick={handleClick}/>
          <Tab label="Item Four" onClick={handleClick}/>
          <Tab label="Item Five" onClick={handleClick}/>
          <Tab label="Item Six" onClick={handleClick}/>
          <Tab label="Item Seven" onClick={handleClick}/>
          <Tab label="5.09 CP" onClick={handleClick}/>
          <Tab label="Item Two" onClick={handleClick}/>
          <Tab label="Item Three" onClick={handleClick}/>
          <Tab label="Item Four" onClick={handleClick}/>
          <Tab label="Item Five" onClick={handleClick}/>
          <Tab label="Item Six" onClick={handleClick}/>
          <Tab label="Item Seven" onClick={handleClick}/>
          <Tab label="5.09 CP" onClick={handleClick}/>
          <Tab label="Item Two" onClick={handleClick}/>
          <Tab label="Item Three" onClick={handleClick}/>
          <Tab label="Item Four" onClick={handleClick}/>
          <Tab label="Item Five" onClick={handleClick}/>
          <Tab label="Item Six" onClick={handleClick}/>
          <Tab label="Item Seven" onClick={handleClick}/>
        </Tabs>
      </Box>
    );
};
