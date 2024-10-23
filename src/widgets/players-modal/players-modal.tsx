import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './players-modal.module.css';
import { ModalOverlay } from '../../shared/ui/modalOverlay/modalOverlay';
import { CardPlayerAvatar } from '../../entity/card-player-avatar/ui';
import { CancelIcon } from '../../shared/ui/cancel-icon/cancel-icon';
import { size } from '../../utils/types';
import { LightTooltip } from '../../shared/ui/tooltip/tooltip';

type TPlayersModalProps = {
  onClose: () => void;
  players?: any;
};

const modalRoot = document.getElementById('modals');

export const PlayersModal = (props: TPlayersModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && props.onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [props.onClose]);

  //выводить игроков и ведущих циклом

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.close}>
          <div className={styles.closeIcon} onClick={props.onClose}>
            <CancelIcon />
          </div>
        </div>
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
      </div>
      <ModalOverlay onClick={props.onClose} />
    </>,
    modalRoot as HTMLDivElement
  );
};
