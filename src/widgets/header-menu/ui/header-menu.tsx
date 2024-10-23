import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header-menu.module.css';
import { BurgerMenu } from '../../../widgets/burger-menu/ui';
import { useResize } from '../../../shared/hooks/useResize';
import { MenuState } from '../../../widgets/burger-menu/model/burger-menu-context';
import { LogoSVG } from '../../../shared/ui/logo/logo';
import { Link } from 'react-router-dom';

export const HeaderMenu = () => {
  const tablet = useResize().isScreenTablet;

  return (
    <>
      <style type='text/css'>
        {`
          .navbar {
            height: clamp(2.875rem, 2.1796rem + 1.4085vw, 3.5rem);
            font-family: cursive;
            width: 100%;
            z-index: 10
          }

          .container {
            margin: clamp(1.25rem, -0.1408rem + 2.8169vw, 2.5rem);
          }

          .navbar-expand {
            justify-content: center
          }
          .nav-link {
            font-size: clamp(0.75rem, 0.4718rem + 0.5634vw, 1rem);
          }

          .nav-pills .nav-link.active {
            background-color: #FC411E;
            color: #fff;
          }

          .nav-pills .nav-link.active:hover {
            color: #fff;
          }
            
          .nav-pills .nav-link:hover {
              color: #fff;
          }
          `}
      </style>
      <Navbar bg='dark' data-bs-theme='dark' sticky='top' fixed='top'>
        <Container>
          <a href='#' className={styles.logo}>
            <LogoSVG />
          </a>

          {!tablet && (
            <Nav variant='pills' defaultActiveKey='/#about-us'>
              <Link to={'/#about-us'} className={styles.link}>
                <Nav.Link href='/#about-us'>О нас</Nav.Link>
              </Link>
              <Link to={'/#schedule'} className={styles.link}>
                <Nav.Link href='/#schedule'>Записаться на игру</Nav.Link>
              </Link>
              <Link to={'/login'} className={styles.link}>
                <Nav.Link href='/login'>Мой профиль</Nav.Link>
              </Link>
            </Nav>
          )}

          {tablet && (
            <MenuState>
              <BurgerMenu />
            </MenuState>
          )}
        </Container>
      </Navbar>
    </>
  );
};
