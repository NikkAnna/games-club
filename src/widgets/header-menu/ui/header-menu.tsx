import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header-menu.module.css';

export const HeaderMenu = () => (
  <Navbar bg='light' data-bs-theme='light' sticky='top' fixed='top'>
    <Container>
      <Navbar.Brand href='/#about-us'>Na Bali Logo</Navbar.Brand>
      <style type='text/css'>
          {`
          .nav-pills .nav-link.active {
            background-color: #FC411E;
            color: #fff;
          }
            
          .nav-pills .nav-link:hover {
              text-shadow: 1px 1px 1px red;
          }
          `}
      </style>
      <Nav variant='pills' defaultActiveKey='/#about-us'>
        <Nav.Link href='/#about-us'>О нас</Nav.Link>
        <Nav.Link href='/#schedule'>Записаться на игру</Nav.Link>
        <Nav.Link href='/profile'>Войти | Зарегистрироваться</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
