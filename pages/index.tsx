import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Intro from '../components/intro'
import Block from '../components/block'
import IntroData from '../interfaces/IntroData'
import BlockData from '../interfaces/BlockData'

const Home: NextPage<{
  introData: IntroData[],
  sortedBlockData: BlockData[]
}> = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header  />
      
      <main className={styles.main}>
        <div>
        {
          props.introData.map((introData, i) => {
            return <Intro key={i} intro={introData} />
          })
        }

        {
          props.sortedBlockData.map((blockData, i) => {
            if (i % 2 == 0) {
              return <Block class={styles.blockRight} key={i} block={blockData} />
            } else {
              return <Block class={styles.blockLeft} key={i} block={blockData} />
            }
          })
        }
        </div>        
      </main>

      <footer className={styles.footer}>
          Styn.vercauteren@outlook.com
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { NEXT_PUBLIC_BACKEND_URL } = process.env;

    const intro = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/intro`);
    const introData: IntroData[] = await intro.json();
    
    const block = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/block`);
    const blockData: BlockData[] = await block.json();
    const sortedBlockData: BlockData[] = blockData.sort((a: BlockData, b: BlockData) => a.position - b.position);

    return {
      props: {
        introData,
        sortedBlockData
      },
    };
};

export default Home
