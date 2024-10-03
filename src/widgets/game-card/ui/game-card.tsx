import { date } from '../../../shared/model/date-convert';
import { TGame } from '../../../shared/types/types';
import styles from '../game-card.module.css';

type TGameCardProps = {
  game: TGame;
};

export const GameCard = ({ game }: TGameCardProps) => {
  const totalPlayersNumber =
    game.registration_records.length +
    game.registration_records.reduce(function (sum, currentSum) {
      return sum + currentSum.referrals_amount;
    }, 0);

  const handleClick = () => {
    //confirm modal open, success modal open, button changes status and color if player is on game
    //if player not login redirect to login page
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src='https://avatars.mds.yandex.net/get-altay/5965316/2a000001806afb83751c95114b771acfad29/XXL_height'
          alt=''
          className={styles.img}
        />
        <div
          className={styles.totalNumber}
        >{`Записано игроков: ${totalPlayersNumber}`}</div>
      </div>
      <div>
        <h2>{game.game_kind.name}</h2>
        <p>{`${date(game.start_time).onlyDate} в ${date(game.start_time).time}`}</p>
        <p>{game.address}</p>
        <p>{game.cost}</p>
      </div>
      <div>
        <h3>Записаны на игру: </h3>
      </div>
      <button>Записаться на игру</button>
    </article>
  );
};
