import { date } from '../../../shared/model/date-convert';
import { TGame } from '../../../shared/types/types';
import styles from '../game-card.module.css';
import { CardButton } from '../../../entity/card-button/ui';
import { CardPlayerAvatar } from '../../../entity/card-player-avatar/ui';

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
          //заменить на картинку которая приходит с сервера
          alt=''
          className={styles.img}
        />
        <div
          className={styles.totalNumber}
        >{`Записано игроков: ${totalPlayersNumber}`}</div>
      </div>
      <section className={styles.contentSection}>
        <div>
          <h2 className={styles.title}>{game.game_kind.name}</h2>
          <div className={styles.textbox}>
            <p
              className={styles.text}
            >{`${date(game.start_time).onlyDate} в ${date(game.start_time).time}`}</p>
            <p className={styles.text}>{game.address}</p>
            <p className={styles.text}>{`Стоимость: ${game.cost} руб.`}</p>
          </div>
        </div>
        <div>
          <h3 className={styles.subtitle}>Придут на игру: </h3>
          <div>
            <CardPlayerAvatar />
          </div>
        </div>
        <CardButton children={'Записаться'} onClick={handleClick} />
      </section>
    </article>
  );
};
