import {
  getGamesSelector,
  getGamesTypesSelector,
  getLoaderSelector,
  getSelectedGames,
  getSelectedGamesSelector
} from '../../../app/slices/gamesSlice';
import { useDispatch, useSelector } from '../../../app/services/store';
import { useEffect, useRef, useState } from 'react';

import { GameCard } from '../../../entity/game-card/ui/game-card';
import { NoGameBunner } from '../../../entity/no-games-banner/ui';
import { Preloader } from '../../../entity/preloader/ui';
import { ScheduleHeaderItem } from '../../../entity/schedule-header';
import { ScheduleTabs } from '../../../entity/schedule-tabs';
import cn from 'classnames';
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

  const loader = useSelector(getLoaderSelector);

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
      if (
        date(game.start_time).onlyDate ===
        date(new Date().toISOString()).onlyDate
      ) {
        return game;
      }
    });
    if (gameToday) {
      return true;
    }
    return false;
  };

  const [typesTabsActive, setTypesTabsActive] = useState(0);
  const [allTypesOfGamesActive, setAllTypesOfGamesActive] = useState(true);

  const [allDatesActive, setAllDatesActive] = useState(true);
  const [todayGamesActive, setTodayGamesActive] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    setTabActive(-1);
    setTypesTabsActive(0);
    setAllTypesOfGamesActive(true);
    setAllDatesActive(true);
    dispatch(getSelectedGames({ date: 'Все даты', type: 'Все игры' }));
    typeRef.current = 'Все игры';
    dateRef.current = 'Все даты';
    // setHasSelectedGames(true);
  }, []);

  const selectedGames = useSelector(getSelectedGamesSelector);

  const handleChangeTypesTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTypesTabsActive(newValue);
    const selectedType = allTypes[newValue];
    dispatch(getSelectedGames({ date: dateRef.current, type: selectedType }));
    typeRef.current = selectedType;
    if (newValue) {
      setAllTypesOfGamesActive(false);
    } else {
      setAllTypesOfGamesActive(true);
    }
  };

  const handleClickAllDates = () => {
    setAllDatesActive(true);
    setTabActive(-1);
    setTodayGamesActive(false);
    dispatch(getSelectedGames({ date: 'Все даты', type: typeRef.current }));
    dateRef.current = 'Все даты';
  };

  const handleClickTodayGames = () => {
    setAllDatesActive(false);
    setTabActive(-1);
    setTodayGamesActive(true);
    dispatch(
      getSelectedGames({
        date: todayGames[0].start_time,
        type: typeRef.current
      })
    );
    dateRef.current = todayGames[0].start_time;
  };

  const handleChangeDateTabs = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTabActive(newValue);
    setAllDatesActive(false);
    setTodayGamesActive(false);

    const date = gameDates().gamesInitialData;
    const selectedDate = date[newValue];
    dispatch(getSelectedGames({ date: selectedDate, type: typeRef.current }));
    dateRef.current = selectedDate;
  };

  // const [hasAllGames, setHasAllGames] = useState(true);
  // const [hasSelectedGames, setHasSelectedGames] = useState(true);

  // useEffect(() => {
  //   // if (allGames?.length === 0) {
  //   //   setHasAllGames(false);
  //   // } else {
  //   //   setHasAllGames(true);
  //   // }

  //   if (selectedGames?.length === 0) {
  //     setHasSelectedGames(false);
  //   } else {
  //     setHasSelectedGames(true);
  //   }
  // }, [selectedGames]);

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
          allGamesActive={allDatesActive}
          onClickTodayGames={handleClickTodayGames}
          todayGamesActive={todayGamesActive}
          value={tabActive}
          dates={gameDates().gamesOnlyData}
          onChange={handleChangeDateTabs}
          disabled={!isGameToday()}
        />

        {allDatesActive && allTypesOfGamesActive && (
          <div
            className={
              allGames?.length === 1
                ? styles.cardOneContainer
                : styles.cardsContainer
            }
          >
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )}

        {!allDatesActive && allTypesOfGamesActive && (
          <div
            className={
              selectedGames?.length === 1
                ? styles.cardOneContainer
                : styles.cardsContainer
            }
          >
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )}

        {allDatesActive && !allTypesOfGamesActive && (
          <div
            className={
              selectedGames?.length === 1
                ? styles.cardOneContainer
                : styles.cardsContainer
            }
          >
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )}

        {!allDatesActive && !allTypesOfGamesActive && (
          <div
            className={
              selectedGames?.length === 1
                ? styles.cardOneContainer
                : styles.cardsContainer
            }
          >
            {selectedGames?.map((game, index) => (
              <div key={index} className={styles.card}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        )}

        {!selectedGames?.length && !loader && <NoGameBunner />}

        {loader && <Preloader />}
      </div>
    </div>
  );
};
