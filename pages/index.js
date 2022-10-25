import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GUID } from '../guid';

export async function getServerSideProps() {
  // Pass data to the page via props
  return {
    props: {
      data: (new Date()).toISOString(),
      guid: GUID
    }
  };
}

export default function Home({ data, guid }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App {data} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Server built at: {data}</p>
        <p>Guid changed by canary: {guid}</p>
      </main>
    </div>
  )
}
