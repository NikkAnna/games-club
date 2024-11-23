import { useState } from 'react';

import { date } from '../../../shared/model/date-convert';
import { TGame } from '../../../shared/types/types';
import { CardButton } from '../../../entity/card-button/ui';
import { CardPlayerAvatar } from '../../../entity/card-player-avatar/ui';
import { InfoIcon } from '../../../shared/ui/info-icon/info-icon';
import { PlayersModal } from '../../../widgets/players-modal/players-modal';

import styles from './game-card.module.css';
import { size } from '../../../utils/types';
import { JoinGameModal } from '../../../widgets/join-game-modal/join-game-modal';

type TGameCardProps = {
  game: TGame;
};

export const GameCard = ({ game }: TGameCardProps) => {
  const [playersModalVisible, setPlayersModalVisible] =
    useState<boolean>(false);

  const [joinGameModalVisible, setJoinGameModalVisible] =
    useState<boolean>(false);

  const totalPlayersNumber =
    game.registration_records.length +
    game.registration_records.reduce(function (sum, currentSum) {
      return sum + currentSum.referrals_amount;
    }, 0);

  const buttonHandleClick = () => {
    setJoinGameModalVisible(true);
    //confirm modal open, success modal open, button changes status and color if player is on game
    //if player not login redirect to login page
  };

  const iconHandleClick = () => {
    setPlayersModalVisible(true);
  };

  //получить картинки игроков с сервера и отрисовать циклом в артикл
  //если человек записан на игру его фотка появляется спереди

  return (
    <>
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
            <article className={styles.avatars}>
              <div className={styles.avatarsImages}>
                <CardPlayerAvatar size={size.SMALL} />
                <CardPlayerAvatar size={size.SMALL} />
                <CardPlayerAvatar size={size.SMALL} />
              </div>
              <div className={styles.infoIcon} onClick={iconHandleClick}>
                <InfoIcon />
              </div>
            </article>
          </div>
          <CardButton
            children={'Записаться на игру'}
            onClick={buttonHandleClick}
          />
        </section>
      </article>
      {playersModalVisible && (
        <PlayersModal onClose={() => setPlayersModalVisible(false)} />
      )}
      {joinGameModalVisible && (
        <JoinGameModal onClose={() => setJoinGameModalVisible(false)} />
      )}
    </>
  );
};
