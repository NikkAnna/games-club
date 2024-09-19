import { createContext, ReactElement, useState } from 'react';

type TMenuContext = {
  isMenuOpen: boolean;
  toggleMenuMode: () => void;
};

export const MenuContext = createContext<TMenuContext>({
  isMenuOpen: true,
  toggleMenuMode: () => {}
});

type TMenuState = {
  children: ReactElement | ReactElement[];
};

export const MenuState = (props: TMenuState) => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  function toggleMenuMode() {
    setMenuIsOpen(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {props.children}
    </MenuContext.Provider>
  );
};
