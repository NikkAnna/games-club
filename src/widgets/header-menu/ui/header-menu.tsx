import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header-menu.module.css';
import { BurgerMenu } from '../../../widgets/burger-menu/ui';
import { useResize } from '../../../shared/hooks/useResize';
import { MenuState } from '../../../widgets/burger-menu/model/burger-menu-context';

export const HeaderMenu = () => {
  const tablet = useResize().isScreenTablet;

  return (
    <>
      <style type='text/css'>
        {`
          .navbar {
            height: clamp(2.875rem, 2.1796rem + 1.4085vw, 3.5rem);
            font-family: cursive;
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
              color: grey;
          }
          `}
      </style>
      <Navbar bg='light' data-bs-theme='light' sticky='top' fixed='top'>
        <Container>
          <a href='#' className={styles.logo}>
            <img src='/Logo_main.png' alt='' className={styles.logoImage} />
          </a>

          {!tablet && (
            <Nav variant='pills' defaultActiveKey='/#about-us'>
              <Nav.Link href='/#about-us'>О нас</Nav.Link>
              <Nav.Link href='/#schedule'>Записаться на игру</Nav.Link>
              <Nav.Link href='/profile'>Мой профиль</Nav.Link>
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
