import { GameCard, TGame } from '../../../entity/game-card/ui/game-card';

import { GameDay } from '../../../features/game-day/ui';
import { ScheduleHeaderItem } from '../../../entity/schedule-header';
import { ScheduleTabs } from '../../../entity/schedule-tabs';
import { TodayButton } from '../../../entity/today-button';
import styles from './game-schedule.module.css';
import { useState } from 'react';

const games = [
  {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    address: 'Мясницкая',
    start_time: '18:00',
    date: '29 сентября',
    game_kind: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'Городская мафия'
    },
    cost: 500,
    registration_records: [
      {
        user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        nickname: 'string',
        telegram_id: 0,
        referrals_amount: 1
      }
    ],
    deletedAt: null
  },
  {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    address: 'Мясницкая',
    start_time: '18:00',
    date: '29 сентября',
    game_kind: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'Городская мафия'
    },
    cost: 500,
    registration_records: [
      {
        user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        nickname: 'string',
        telegram_id: 0,
        referrals_amount: 1
      }
    ],
    deletedAt: null
  },
  {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    address: 'Мясницкая',
    start_time: '18:00',
    date: '29 сентября',
    game_kind: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'Городская мафия'
    },
    cost: 500,
    registration_records: [
      {
        user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        nickname: 'string',
        telegram_id: 0,
        referrals_amount: 1
      }
    ],
    deletedAt: null
  }
];


export const GameSchedule = () => {
  const types = ['Все игры', 'Городская мафия', 'Спортивная мафия'];
  const dates = [
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР',
    '6.09 СР'
  ];

  const [active, setActive] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  const handleClick = () => {};

  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Расписание игр</h2>
        <ScheduleTabs gameTypes={types} />
      <ScheduleHeaderItem
        onClick={handleClick}
        value={tabActive}
        dates={dates}
      />
    
      <>{games.map((game) => (
        <div className={styles.card}>
          <GameCard game={game}/>  
        </div>
      ))
      }
      </>
      </div>
    </div>
  );
};
