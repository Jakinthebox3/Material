import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Landing Page</title>
        <meta name="description" content="A simple landing page built with Next.js and JSX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Simple Landing Page
        </h1>

        <p className={styles.description}>
          This is a simple landing page built with Next.js and JSX
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Learn more about Next.js in the official documentation.</p>
          </a>

          <a href="https://reactjs.org/docs/introducing-jsx.html" className={styles.card}>
            <h2>JSX &rarr;</h2>
            <p>Learn more about JSX in the official documentation.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
