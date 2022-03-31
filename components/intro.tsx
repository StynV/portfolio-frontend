import React from 'react'
import IntroData from '../interfaces/IntroData'
import Image from 'next/image'
import headShot from '../images/headshot.jpg'
import styles from '../styles/Home.module.css'

const Intro: React.FC<{intro: IntroData}> = props => {
  return (
    <div className={styles.intro}>
      <div className={styles.introText}>
          <h1 className="text-6xl">{ props.intro.title }</h1>
          <h2 className="text-4xl mt-10">{ props.intro.subtitle }</h2>
          <p className="text-2xl mt-5 lg:mb-0 mb-5">{ props.intro.body }</p>
      </div>
      <div className="ml-auto">
        <Image
          className="object-contain lg:object-right rounded-lg flex-wrap"
          src={headShot}
          alt="headshot"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default Intro