import { LightTooltip } from '../../../shared/ui/tooltip/tooltip';
import { size, TSize } from '../../../utils/types';
import styles from './card-avatar.module.css';
import cn from 'classnames';

type AvatarProps = {
  photo?: string;
  name?: string;
  size: TSize;
};

export const CardPlayerAvatar = (props: AvatarProps) => (
  //добавить пропс к картинке, прописать урл

  <>
    <LightTooltip
      title='хомячок'
      placement='top'
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -14]
              }
            }
          ]
        }
      }}
      followCursor
    >
      <div
        className={
          props.size === size.SMALL ? styles.avatarSmall : styles.avatarBig
        }
      >
        <img
          className={styles.image}
          src='https://www.atlnightspots.com/wp-content/uploads/2022/05/pet-hamster-1536x1024.jpeg'
          alt=''
        />
      </div>
    </LightTooltip>
  </>
);
