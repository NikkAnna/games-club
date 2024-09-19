import { useContext } from 'react';
import styles from './menu-button.module.css';
import { MenuContext } from '../../model/burger-menu-context';
import cn from 'classnames';

export const MenuButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const handleClick = () => {
    toggleMenuMode();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(styles.button, isMenuOpen ? styles.active : '')}
      aria-label='Открыть главное меню'
    >
      <span className={styles.span} />
      <span className={styles.span} />
      <span className={styles.span} />
    </button>
  );
};
