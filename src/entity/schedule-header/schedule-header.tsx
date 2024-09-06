import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TodayButton } from '../today-button';

type TScheduleHeaderItemProps = {
    onChange?: (event: React.SyntheticEvent, value: number) =>  {};
    onClick: () => void;
    value: number;
    dates: string[];
}

export const ScheduleHeaderItem = ({onChange, onClick, value, dates} : TScheduleHeaderItemProps) => {
    
    const [ivalue, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
      console.log(newValue)
    };
  
    return (
        <>
        <style>
        {` 
            .MuiTabs-scrollButtons.Mui-disabled {
                opacity: 0.3;
            }
        `
        }
        </style>
      <Box sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 10fr', alignItems: 'center' }}>
      <TodayButton
              onClick={onClick}
              active={false}
              children={'Все даты'}
            />
            <TodayButton
              onClick={onClick}
              active={false}
              children={'Сегодня'}
            />
        <Tabs
          value={value}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="auto"
        >
        <>
        {
            dates.map((data) => (
                <Tab label={data} onClick={onClick}/>
            ))
        }
        </>
        </Tabs>
      </Box>
      </>
    );
};
