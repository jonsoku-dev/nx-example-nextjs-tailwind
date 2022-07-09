import { GetStaticProps } from 'next/types';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About({ name }: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {name}</h1>
    </div>
  );
}

/**
 * - getStaticProps
 * - getStaticPath
 */
export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Jongseok',
    },
  };
};

export default About;
