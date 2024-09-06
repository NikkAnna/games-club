import cn from 'classnames';
import styles from './today-button.module.css';

export type TTodayButtonProps = {
  onClick: () => void;
  active: boolean;
  children: string;
};

export const TodayButton = ({ onClick, active, children }: TTodayButtonProps) => {

  return (
    <>
      <div>
        <button
          type='button'
          onClick={onClick}
          className={cn(styles.button, active ? styles.active : '')}
        >
          {children}
        </button>
      </div>
    </>
  );
};
