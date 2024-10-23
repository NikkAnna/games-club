import cn from 'classnames';
import styles from './today-button.module.css';
import { LightTooltip } from '../../shared/ui/tooltip/tooltip';

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
    {!disabled && (
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
    )}
    {disabled && (
      <>
        <LightTooltip
          title='Сегодня игр нет :('
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
        </LightTooltip>
      </>
    )}
  </>
);
