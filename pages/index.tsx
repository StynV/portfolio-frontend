import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Intro from '../components/intro'
import IntroData from '../interfaces/IntroData'

const Home: NextPage<{ data: IntroData[] }> = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header  />
      
      <main className={styles.main}>
        {
          props.data.map((introData, i) => {
            return <Intro key={i} intro={introData} />
          })
        }
      </main>

      <footer className={styles.footer}>
          Styn.vercauteren@outlook.com
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const result = await fetch(`https://portfolio-backend-styn.herokuapp.com/data/intro`);
    const data: IntroData[] = await result.json();

    return {
      props: { data }
    };
};

export default Home
