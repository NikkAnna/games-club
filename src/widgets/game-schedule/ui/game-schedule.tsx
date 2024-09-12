import { GameCard, TGame } from '../../../entity/game-card/ui/game-card';
import { useEffect, useState } from 'react';

import { GameDay } from '../../../features/game-day/ui';
import { ScheduleHeaderItem } from '../../../entity/schedule-header';
import { ScheduleTabs } from '../../../entity/schedule-tabs';
import { TodayButton } from '../../../entity/today-button';
import { date } from '../../../shared/model/date-convert';
import { getGamesSelector } from '../../../app/slices/gamesSlice';
import styles from './game-schedule.module.css';
import { useSelector } from '../../../app/services/store';

// const games = [
//   {
//     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//     address: 'Мясницкая',
//     start_time: '18:00',
//     date: '29 сентября',
//     game_kind: {
//       id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//       name: 'Городская мафия'
//     },
//     cost: 500,
//     registration_records: [
//       {
//         user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//         nickname: 'string',
//         telegram_id: 0,
//         referrals_amount: 1
//       }
//     ],
//     deletedAt: null
//   },
//   {
//     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//     address: 'Мясницкая',
//     start_time: '18:00',
//     date: '29 сентября',
//     game_kind: {
//       id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//       name: 'Городская мафия'
//     },
//     cost: 500,
//     registration_records: [
//       {
//         user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//         nickname: 'string',
//         telegram_id: 0,
//         referrals_amount: 1
//       }
//     ],
//     deletedAt: null
//   },
//   {
//     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//     address: 'Мясницкая',
//     start_time: '18:00',
//     date: '29 сентября',
//     game_kind: {
//       id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//       name: 'Городская мафия'
//     },
//     cost: 500,
//     registration_records: [
//       {
//         user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
//         nickname: 'string',
//         telegram_id: 0,
//         referrals_amount: 1
//       }
//     ],
//     deletedAt: null
//   }
// ];

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

  const allGames = useSelector(getGamesSelector);
  const todayGames = allGames.filter((game) => game.start_time === "2024-09-13T19:00:00")
  
  const gameDates = () => {
    const games = allGames.filter((game) => game.start_time !== "2024-09-13T19:00:00") 

    const gamesOnlyData = games.map((game) => {
      const gameDate = date(game.start_time).dateWithMinWeek;
      return gameDate;
    })

    const gamesInitialData = games.map((game) => {
      const gameDate = game.start_time;
      return gameDate;
    })

    return {gamesOnlyData, gamesInitialData};
    }

  const isGameToday = (): boolean => {
    const gameToday = allGames.find((game) => game.start_time === "2024-09-13T19:00:00")
    if (gameToday) {
      return true;
    }
    return false;
  };

  const [allGamesActive, setAllGamesActive] = useState(true);
  const [todayGamesActive, setTodayGamesActive] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    setTabActive(-1);
  }, []);

  
  const handleClickAllGames = () => {
    setAllGamesActive(true);
    setTabActive(-1);
    setTodayGamesActive(false);
  };

  const handleClickTodayGames = () => {
    setAllGamesActive(false);
    setTabActive(-1);
    setTodayGamesActive(true);
    
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabActive(newValue);
    setAllGamesActive(false);
    setTodayGamesActive(false);

    const date = gameDates().gamesInitialData;
    const selectedDate = date[newValue];
    console.log(selectedDate);
    
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Расписание игр</h2>
        <ScheduleTabs gameTypes={types} />
        <ScheduleHeaderItem
          onClickAllGames={handleClickAllGames}
          allGamesActive={allGamesActive}
          onClickTodayGames={handleClickTodayGames}
          todayGamesActive={todayGamesActive}
          value={tabActive}
          dates={gameDates().gamesOnlyData}
          onChange={handleChange}
          disabled={!isGameToday()}
        />

        {allGamesActive && <div className={styles.cardsContainer}>
          {allGames.map((game, index) => (
            <div key={index} className={styles.card}>
              <GameCard game={game} />
            </div>
          ))}
        </div>}

        {todayGamesActive && <div className={styles.cardsContainer}>
          {todayGames.map((game, index) => (
            <div key={index} className={styles.card}>
              <GameCard game={game} />
            </div>
          ))}
        </div>}
      </div>
    </div>
  );
};
