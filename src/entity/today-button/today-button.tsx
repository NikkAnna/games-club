import cn from 'classnames';
import styles from './today-button.module.css';

export type TTodayButtonProps = {
  onClick: () => void;
  active: boolean;
  children: string;
  disabled: boolean;
};

export const TodayButton = ({
  onClick,
  active,
  children,
  disabled
}: TTodayButtonProps) => (
  <>
    <div>
      <button
        type='button'
        onClick={onClick}
        className={cn(
          styles.button,
          active ? styles.active : '',
          disabled ? styles.disabled : ''
        )}
      >
        {children}
      </button>
    </div>
  </>
);
