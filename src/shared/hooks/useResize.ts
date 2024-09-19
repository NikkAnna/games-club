import { useState, useEffect } from 'react';


export const SCREEN_TABLET = 1024;

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = (event: any) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return {
      width,
      isScreenTablet: width <= SCREEN_TABLET,
    };
  };
