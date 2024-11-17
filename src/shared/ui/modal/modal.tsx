import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CancelIcon } from '../cancel-icon/cancel-icon';
import { ModalOverlay } from '../modalOverlay/modalOverlay';

import styles from './modal.module.css';

type TModalProps = {
  onClose: () => void;
  children?: ReactNode;
};

const modalRoot = document.getElementById('modals');

export const Modal = (props: TModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && props.onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [props.onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.close}>
          <div className={styles.closeIcon} onClick={props.onClose}>
            <CancelIcon />
          </div>
        </div>
        {props.children}
      </div>
      <ModalOverlay onClick={props.onClose} />
    </>,
    modalRoot as HTMLDivElement
  );
};
