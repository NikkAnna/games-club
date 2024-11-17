import { Modal } from "../../shared/ui/modal/modal";



type TPlayersModalProps = {
    onClose: () => void;
    players?: any;
  };
  
  export const JoinGameModal = (props: TPlayersModalProps) => (
    //выводить игроков и ведущих циклом
  
    <>
      <Modal onClose={props.onClose}>
        {
          <>
            
          </>
        }
      </Modal>
    </>
  );