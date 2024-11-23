import { ReactNode } from 'react';
import styles from './card-button.module.css';
import classNames from 'classnames';

export type TCardButtonProps = {
  children: ReactNode | string;
  onClick?: () => void;
  setDisabled?: boolean;
  color?: 'standart' | 'white';
  type: 'button' | 'submit';
};

export const CardButton = (props: TCardButtonProps) => (
  <button
    type={props.type}
    className={classNames(
      styles.button,
      props.setDisabled ? styles.disabled : '',
      props.color === 'white' ? styles.white : ''
    )}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
