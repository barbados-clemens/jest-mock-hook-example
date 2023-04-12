import styles from './lib-one.module.scss';

/* eslint-disable-next-line */
export interface LibOneProps {}

export function LibOne(props: LibOneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibOne!</h1>
    </div>
  );
}

export default LibOne;
