import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components//header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header  />
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Styn Vercauteren
        </h1>

        
      </main>

      <footer className={styles.footer}>
          Styn.vercauteren@outlook.com
      </footer>
    </div>
  )
}

export default Home
