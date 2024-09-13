import {
  getGamesSelector,
  getGamesTypesSelector,
  getSelectedGames,
  getSelectedGamesSelector
} from '../../../app/slices/gamesSlice';
import { useDispatch, useSelector } from '../../../app/services/store';
import { useEffect, useRef, useState } from 'react';

import { GameCard } from '../../../entity/game-card/ui/game-card';
import { ScheduleHeaderItem } from '../../../entity/schedule-header';
import { ScheduleTabs } from '../../../entity/schedule-tabs';
import { date } from '../../../shared/model/date-convert';
import styles from './game-schedule.module.css';

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
  const typeRef = useRef('');
  const dateRef = useRef('');
  
  const type = ['Все игры'];
  const gameTypes = useSelector(getGamesTypesSelector);
  const allTypes = [...type, ...gameTypes];
  // const dates = [
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР',
  //   '6.09 СР'
  // ];
  const dispatch = useDispatch();
  const allGames = useSelector(getGamesSelector);
  const todayGames = allGames.filter(
    (game) =>
      date(game.start_time).onlyDate === date(new Date().toISOString()).onlyDate
  );
  const selectedGames = useSelector(getSelectedGamesSelector);

  const gameDates = () => {
    const games = allGames.filter(
      (game) =>
        date(game.start_time).onlyDate !==
        date(new Date().toISOString()).onlyDate
    );

    const gamesOnlyData = games.map((game) => {
      const gameDate = date(game.start_time).dateWithMinWeek;
      return gameDate;
    });

    const gamesInitialData = games.map((game) => {
      const gameDate = game.start_time;
      return gameDate;
    });

    return { gamesOnlyData, gamesInitialData };
  };

  const isGameToday = (): boolean => {
    const gameToday = allGames.find((game) => {
      if (date(game.start_time).onlyDate ===
        date(new Date().toISOString()).onlyDate) {
          return game
        };
    });
    if (gameToday) {
      return true;
    }
    return false;
  };

  const [typesTabsActive, setTypesTabsActive] = useState(0);

  const [allGamesActive, setAllDatesActive] = useState(true);
  const [todayGamesActive, setTodayGamesActive] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    setTabActive(-1);
    dateRef.current = 'Все даты';
    setTypesTabsActive(0);
    typeRef.current = 'Все игры';
  }, []);

  const handleChangeTypesTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTypesTabsActive(newValue);
    const selectedType = allTypes[newValue];
    dispatch(getSelectedGames({date: dateRef.current, type: selectedType}));
    typeRef.current = selectedType
    console.log(dateRef.current)
    console.log(typeRef.current)
  };

  const handleClickAllDates = () => {
    setAllDatesActive(true);
    setTabActive(-1);
    setTodayGamesActive(false);
    dateRef.current = 'Все даты';
    console.log(dateRef.current)
    console.log(typeRef.current)
  };

  const handleClickTodayGames = () => {
    setAllDatesActive(false);
    setTabActive(-1);
    setTodayGamesActive(true);
    dateRef.current = todayGames[0].start_time
    console.log(dateRef.current)
    console.log(typeRef.current)
  };

  const handleChangeDateTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabActive(newValue);
    setAllDatesActive(false);
    setTodayGamesActive(false);

    const date = gameDates().gamesInitialData;
    const selectedDate = date[newValue];
    dispatch(getSelectedGames({date: selectedDate, type: typeRef.current}));
    dateRef.current = selectedDate;
    console.log(dateRef.current)
    console.log(typeRef.current)
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Расписание игр</h2>
        <ScheduleTabs
          gameTypes={allTypes}
          typesTabsActive={typesTabsActive}
          tabsOnChange={handleChangeTypesTabs}
        />
        <ScheduleHeaderItem
          onClickAllGames={handleClickAllDates}
          allGamesActive={allGamesActive}
          onClickTodayGames={handleClickTodayGames}
          todayGamesActive={todayGamesActive}
          value={tabActive}
          dates={gameDates().gamesOnlyData}
          onChange={handleChangeDateTabs}
          disabled={!isGameToday()}
        />

        {/* {allGamesActive && (
          <div className={styles.cardsContainer}>
            {allGames.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )} */}

        {/* {typesTabsActive && allGamesActive && ( */}
          <div className={styles.cardsContainer}>
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        {/* )} */}

        {/* {todayGamesActive && (
          <div className={styles.cardsContainer}>
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )}

        {!allGamesActive && !todayGamesActive && (
          <div className={styles.cardsContainer}>
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};
