import React from 'react'
import IntroData from '../interfaces/IntroData'
import Image from 'next/image'
import headShot from '../images/headshot.jpg'
import styles from '../styles/Home.module.css'

export class Intro extends React.Component<{intro: IntroData}> {
  render() {
    return (
      <div className={styles.intro}>
        <div className={styles.introText}>
            <h1 className="lg:text-6xl text-8xl">{ this.props.intro.title }</h1>
            <h2 className="lg:text-4xl text-6xl mt-10">{ this.props.intro.subtitle }</h2>
            <p className="lg:text-2xl text-4xl mt-5">{ this.props.intro.body }</p>
        </div>
        <div className="ml-auto">
          <Image
            className="object-contain lg:object-right rounded-lg"
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