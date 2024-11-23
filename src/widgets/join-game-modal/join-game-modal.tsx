import { Counter } from '../../entity/counter/counter';
import { CardButton } from '../../entity/card-button/ui';
import { Modal } from '../../shared/ui/modal/modal';

import styles from './join-game-modal.module.css';

type TPlayersModalProps = {
  onClose: () => void;
  players?: any;
};

export const JoinGameModal = (props: TPlayersModalProps) => {
  const handleClick = () => {
    alert('запись на игру');
  };

  return (
    <>
      <Modal onClose={props.onClose}>
        {
          <>
            <div>
              <p>С вами на игру</p>
              <Counter />
            </div>
            <div>
              <p>Рандомная фраза-вопрос, которую придумает Александр</p>
              <CardButton onClick={handleClick}>Да, я в деле</CardButton>
              <CardButton onClick={props.onClose}>Нет, передумал</CardButton>
            </div>
          </>
        }
      </Modal>
    </>
  );
};
