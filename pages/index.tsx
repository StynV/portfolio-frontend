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
            return <Block key={i} block={blockData} />
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
    const intro = await fetch(`https://portfolio-backend-styn.herokuapp.com/data/intro`);
    const introData: IntroData[] = await intro.json();
    
    const block = await fetch(`https://portfolio-backend-styn.herokuapp.com/data/block`);
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
