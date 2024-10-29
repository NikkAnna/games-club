import { ReactNode } from 'react';
import styles from './card-button.module.css';
import classNames from 'classnames';

export type TCardButtonProps = {
  children: ReactNode | string;
  onClick?: () => void;
  setDisabled?: boolean;
};

export const CardButton = (props: TCardButtonProps) => (
  <button
    className={classNames(
      styles.button,
      props.setDisabled ? styles.disabled : ''
    )}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
