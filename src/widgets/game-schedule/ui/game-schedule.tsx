import { GameDay } from '../../../features/game-day/ui';
import { TGame } from '../../../entity/game-card/ui/game-card';
import styles from './game-schedule.module.css';

const game = [
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
type TSchedule = {
    date: any[];
}

export const GameSchedule = (props: TSchedule ) => {

    
  
  return (
    <div className={styles.wrapper}>
        <h2>Расписание игр</h2>
        <div className={styles.weekContainer}>
        <>{
            props.date.map((date) => (
                <GameDay games={game} date={date} />
            ))
        }
        </>
        </div>
    </div>
    );
};
