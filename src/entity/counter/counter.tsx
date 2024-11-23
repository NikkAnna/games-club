import { useState } from 'react';
import styles from './counter.module.css';

type TCounterProps = {
  min?: number;
  max?: number;
};

export const Counter = (props: TCounterProps) => {
  const [value, setValue] = useState<number>(0);

  const handleIncrease = () => {
    setValue((value) => value + 1);
  };
  const handleDecrease = () => {
    setValue((value) => value - 1);
  };

  return (
    <>
      <div>
        <button
          onClick={handleDecrease}
          disabled={!value}
          className={styles.button}
        >
          -
        </button>
        <input
          className={styles.input}
          type='number'
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          min={props.min || 0}
          max={props.max || 10}
          onKeyDown={(e) => {
            if (e.key.match(/[A-Za-zА-Яа-яЁё]#/)) return e.preventDefault();
          }}
          pattern='[0-9]+'
        />
        <button
          onClick={handleIncrease}
          disabled={value === (props.max ? props.max : 10)}
          className={styles.button}
        >
          +
        </button>
      </div>
      {value >= (props.max ? props.max + 1 : 11) && (
        <p
          className={styles.error}
        >{`Вы можете привести только ${props.max ? props.max : 10} друзей`}</p>
      )}
    </>
  );
};
