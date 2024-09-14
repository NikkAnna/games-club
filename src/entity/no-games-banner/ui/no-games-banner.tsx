import cn from 'classnames';
import styles from './no-games-banner.module.css';

export const NoGameBunner = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <p className={cn(styles.p, styles.games)}>
        G<span className={styles.span}>am</span>es
      </p>
      <p className={cn(styles.p, styles.notFound)}>
        not
        <span className={styles.span} />
        <span className={styles.span}>found</span>
      </p>
    </div>
  </div>
);
