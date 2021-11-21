import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Intro from '../components/intro'
import Block from '../components/block'
import Footer from '../components/footer'
import Certificate from '../components/certificate'
import IntroData from '../interfaces/IntroData'
import BlockData from '../interfaces/BlockData'
import CertificateData from '../interfaces/CertificateData'

const Home: NextPage<{
  introData: IntroData[],
  sortedBlockData: BlockData[],
  certificateData: CertificateData[]
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
                return (
                  <Block
                    class={styles.blockRight}
                    key={i} block={blockData}
                    titleClass="lg:text-4xl text-6xl mb-10 ml-40"
                  />
                )
              } else {
                return (
                  <Block
                    class={styles.blockLeft}
                    key={i}
                    block={blockData}
                    titleClass="lg:text-4xl text-6xl mb-10"
                  />
                )
              }
            })
          }

          <div>
            <h1 className="text-4xl mb-10">Udemy certificates</h1>
              {
                props.certificateData.map((certificateData, i) => {
                  return <Certificate key={i} certificate={certificateData} />
                })
            }
          </div>
        </div>        
      </main>

      <Footer />
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

    const certificates = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/certificate`);
    const certificateData: CertificateData[] = await certificates.json();

    return {
      props: {
        introData,
        sortedBlockData,
        certificateData
      },
    };
};

export default Home
