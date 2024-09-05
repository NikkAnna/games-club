import { Children, useState } from 'react';

import Button from 'react-bootstrap/Button';
import cn from 'classnames';
import styles from './today-button.module.css';

export const TodayButton = ({ children }: any) => {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };


  
  return (
    <>
      <style>
        {`
                .btn {
                    border-radius: 10px;
                    width: 100%;
                    background: transparent;
                    color: #575757;
                    border: 1px solid transparent;
                    text-transform: uppercase;
                }
                    
                .btn:hover {
                    background: transparent;
                    border: 1px solid transparent;
                    color: white;
                }

                :not(.btn-check)+.btn:active {
                    background: transparent;
                    border: 1px solid transparent;
                    color: white;
                    transform: scale(1.05);
                    transition: 0.1s ease;
                }

                .btn:active {   
                    color: white;
                    background: transparent;
                    border: 1px solid transparent;
                }

                .btn:focus-visible {
                    background: transparent;
                    border: 1px solid transparent;
                    color: white;
                    box-shadow: 0 0 0.25rem #FC411E;
                }
            `}
      </style>
      <div className={cn(styles.wrapper, active ? styles.active : '')}>
        <Button type='button' onClick={handleClick}>
          {children}
        </Button>
      </div>
    </>
  );
};
