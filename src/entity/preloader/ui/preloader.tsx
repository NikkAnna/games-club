import styles from './preloader.module.css';

export const Preloader = () => (
  <div className={styles.loadWrapper}>
    <div className={styles.loader}>
      <span className={styles.ringFour} />
      <span className={styles.ringThree} />
      <span className={styles.colorRing} />
      <span className={styles.ringTwo} />
      <span className={styles.ball} />
    </div>
  </div>
);
