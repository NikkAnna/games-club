import { useState } from 'react';
import styles from './counter.module.css';

type TCounterProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
};

export const Counter = (props: TCounterProps) => {

  const handleIncrease = () => {
    props.setValue((value) => value + 1);
  };
  const handleDecrease = () => {
    props.setValue((value) => value - 1);
  };

  return (
    <>
      <div>
        <form>
          <button
            onClick={handleDecrease}
            disabled={!props.value}
            className={styles.button}
          >
            -
          </button>
          <input
            className={styles.input}
            type='number'
            value={props.value}
            onChange={(e) => props.setValue(Number(e.target.value))}
            min={props.min || 0}
            max={props.max || 10}
            onKeyDown={(e) => {
              if (e.key.match(/[A-Za-zА-Яа-яЁё]#/)) return e.preventDefault();
            }}
            pattern='[0-9]+'
          />
          <button
            onClick={handleIncrease}
            disabled={props.value === (props.max ? props.max : 10)}
            className={styles.button}
          >
            +
          </button>
        </form>
      </div>
    </>
  );
};
