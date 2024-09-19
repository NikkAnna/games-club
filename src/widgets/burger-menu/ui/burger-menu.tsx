import { useContext, useRef } from 'react';
import { MenuContext } from '../model/burger-menu-context';
import { MenuButton } from './menu-button/menu-button';
import { SideMenu } from './side-menu/side-menu';
import useOnClickOutside from '../../../shared/hooks/useOnClickOutside';

export const BurgerMenu = () => {
  const node = useRef<HTMLDivElement>(null);
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <div ref={node}>
      <MenuButton />
      <SideMenu />
    </div>
  );
};
