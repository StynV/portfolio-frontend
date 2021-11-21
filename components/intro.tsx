import React from 'react'
import IntroData from '../interfaces/IntroData'
import Image from 'next/image'
import headShot from '../images/20211111_140552.jpg'
import styles from '../styles/Home.module.css'

export class Intro extends React.Component<{intro: IntroData}> {
  render() {
    return (
      <div className={styles.intro}>
        <div className={styles.introText}>
            <h1 className="text-6xl">{ this.props.intro.title }</h1>
            <h2 className="text-4xl mt-10">{ this.props.intro.subtitle }</h2>
            <p className="text-2xl mt-5">{ this.props.intro.body }</p>
        </div>
        <div className={styles.introFoto}>
          <Image
            className="object-contain object-right"
            src={headShot}
            alt="headshot"
            width={400}
            height={400}
          />
        </div>
      </div>
    )    
  }
}

export default Intro