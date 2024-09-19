import { MenuState } from '../model/burger-menu-context';
import { MenuButton } from './menu-button/menu-button';
import { SideMenu } from './side-menu/side-menu';

export const BurgerMenu = () => (
  <MenuState>
    <MenuButton />
    <SideMenu />
  </MenuState>
);
