import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header-menu.module.css';

// export const HeaderMenu = () => (
//   <Navbar expand='true' fixed='top' sticky='top' className={styles.navbar}>
//     <Navbar.Brand href='#'>Na Bali</Navbar.Brand>
//     <Nav variant='pills' defaultActiveKey='1' className={styles.nav}>
//         <Nav.Link href='/' eventKey='1' className={styles.link}>
//           Главная
//         </Nav.Link>
//         <Nav.Link href='/profile' eventKey='2' className={styles.link}>
//           О нас
//         </Nav.Link>
//     </Nav>
//   </Navbar>
// );



export const HeaderMenu = () => {
  return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav variant='pills' defaultActiveKey='#home' className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

// export default ColorSchemesExample;

// export const HeaderMenu = () => {
//     return (
//       <Nav variant="pills" defaultActiveKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-1">Option 2</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     );
//   }
