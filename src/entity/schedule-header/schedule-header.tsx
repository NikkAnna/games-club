import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TodayButton } from '../today-button';

type TScheduleHeaderItemProps = {
  onChange?: (event: React.SyntheticEvent, value: number) => void;
  onClickAllGames: () => void;
  onClickTodayGames: () => void;
  value: number;
  dates: string[] | undefined;
  disabled: boolean;
  allGamesActive: boolean;
  todayGamesActive: boolean;
};

export const ScheduleHeaderItem = ({
  onChange,
  onClickAllGames,
  value,
  dates,
  disabled,
  allGamesActive,
  onClickTodayGames,
  todayGamesActive
}: TScheduleHeaderItemProps) => (
  <>
    <style>
      {` 
            .MuiTabs-scrollButtons.Mui-disabled {
                opacity: 0.3;
            }

            .MuiButtonBase-root {
                font-size: clamp(0.5625rem, 0.4583rem + 0.4444vw, 0.875rem);
              }
            
            }
        `}
    </style>
    <Box
      sx={{
        maxWidth: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 10fr',
        alignItems: 'center'
      }}
    >
      <TodayButton
        onClick={onClickAllGames}
        active={allGamesActive}
        children={'Все даты'}
        disabled={false}
      />
      <TodayButton
        onClick={onClickTodayGames}
        active={todayGamesActive}
        children={'Сегодня'}
        disabled={disabled}
      />
      <Tabs
        value={value}
        onChange={onChange}
        variant='scrollable'
      >
        {dates?.map((data, index) => (
          <Tab key={index} label={data} />
        ))}
      </Tabs>
    </Box>
  </>
);
