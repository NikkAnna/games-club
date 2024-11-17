import styles from './players-modal.module.css';
import { CardPlayerAvatar } from '../../entity/card-player-avatar/ui';
import { size } from '../../utils/types';
import { Modal } from '../../shared/ui/modal/modal';

type TPlayersModalProps = {
  onClose: () => void;
  players?: any;
};

export const PlayersModal = (props: TPlayersModalProps) => (
  //выводить игроков и ведущих циклом

  <>
    <Modal onClose={props.onClose}>
      {
        <>
          <div className={styles.yourRecord} />
          <div className={styles.container}>
            <h3 className={styles.title}>{'Ведущие'}</h3>
            <div className={styles.avatars}>
              <CardPlayerAvatar size={size.BIG} />
            </div>
          </div>
          <div className={styles.container}>
            <h3 className={styles.title}>{'Игроки'}</h3>
            <div className={styles.avatars}>
              <CardPlayerAvatar size={size.BIG} />
              <CardPlayerAvatar size={size.BIG} />
              <CardPlayerAvatar size={size.BIG} />
              <CardPlayerAvatar size={size.BIG} />
              <CardPlayerAvatar size={size.BIG} />
            </div>
          </div>
        </>
      }
    </Modal>
  </>
);
