import React from 'react'
import BlockData from '../interfaces/BlockData'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export class Block extends React.Component<{block: BlockData}> {
  render() {
    return (
      <div style={{ backgroundColor: this.props.block.backgroundColor }}>
        <div>
            <h1 className="text-4xl">{ this.props.block.title }</h1>
            <h2 className="text-2xl mt-10">{ this.props.block.subtitle }</h2>
            <p className="text-xl mt-5">{ this.props.block.body }</p>
        </div>
        <div className={styles.introFoto}>
          {/* <Image
            className="object-contain"
            src={headShot}
            alt="headshot"
            width={400}
            height={400}
          /> */}
        </div>
      </div>
    )    
  }
}

export default Block