import { Counter } from '../../entity/counter/counter';
import { CardButton } from '../../entity/card-button/ui';
import { Modal } from '../../shared/ui/modal/modal';

import styles from './join-game-modal.module.css';
import { FormEvent, useState } from 'react';
import { getRandomInvitation } from '../../utils/random-invitation';

type TJoinGameModalProps = {
  onClose: () => void;
  players?: any;
  maxFriendsPlayers?: number;
};

export const JoinGameModal = (props: TJoinGameModalProps) => {
  const [value, setValue] = useState<number>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
    alert('запись на игру');
    props.onClose();
  };

  return (
    <>
      <Modal onClose={props.onClose}>
        {
          <form onSubmit={handleSubmit}>
            <section className={styles.modal}>
              <p className={styles.text}>С вами на игру</p>
              <div className={styles.counter}>
                <Counter value={value} setValue={setValue} />
                <p className={styles.text}>друзей</p>
              </div>
              <>
                {value >=
                  (props.maxFriendsPlayers
                    ? props.maxFriendsPlayers + 1
                    : 11) && (
                  <p
                    className={styles.error}
                  >{`Вы можете привести только ${props.maxFriendsPlayers ? props.maxFriendsPlayers : 10} друзей`}</p>
                )}
              </>
              <p className={styles.text}>{getRandomInvitation()}</p>
              <div className={styles.buttons}>
                <CardButton
                  type='submit'
                  setDisabled={
                    value >=
                    (props.maxFriendsPlayers ? props.maxFriendsPlayers + 1 : 11)
                  }
                >
                  Да, я в деле
                </CardButton>
                <CardButton type='button' onClick={props.onClose} color='white'>
                  Нет, передумал
                </CardButton>
              </div>
            </section>
          </form>
        }
      </Modal>
    </>
  );
};
