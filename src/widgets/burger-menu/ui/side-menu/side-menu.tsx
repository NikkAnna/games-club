import { Link } from 'react-router-dom';
import styles from './side-menu.module.css';
import { useContext } from 'react';
import { MenuContext } from '../../model/burger-menu-context';
import cn from 'classnames';

export const SideMenu = () => {
    const { isMenuOpen } = useContext(MenuContext);
    
  return (
  <nav className={cn(styles.nav, isMenuOpen ? styles.active : '')}>
    <a className={styles.link}>О нас</a>
    <a className={styles.link}>Записаться на игру</a>
    <a className={styles.link}>Мой профиль</a>
  </nav>
  )
};
