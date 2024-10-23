import Navbar from 'react-bootstrap/Navbar';
import { GameSchedule } from '../../widgets/game-schedule/ui';

type THomeProps = {
  onPlayersModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Home = () => (
  <>
    <GameSchedule />
  </>
);
