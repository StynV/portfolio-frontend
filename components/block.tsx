import React from 'react'
import BlockData from '../interfaces/BlockData'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlockIcons from './block-icons'

export class Block extends React.Component<{
  block: BlockData,
  class: string,
  titleClass: string
}> {
  render() {
    return (
      <>
        <h1 className={this.props.titleClass}>{ this.props.block.title }</h1>
        <div className={this.props.class} style={{ backgroundColor: this.props.block.backgroundColor }}>
          <div>
              <h2 className="text-3xl">{ this.props.block.subtitle }</h2>
              <p className="text-xl mt-5 max-w-xl">{ this.props.block.body }</p>
              <p className="text-xl mt-5 max-w-xl"><b>Duration:</b> { this.props.block.duration }</p>
              <BlockIcons icons={ this.props.block.icons } class="h-10 w-10 mt-5 mr-2 float-left" />
          </div>
          <div className={styles.blockFoto}>
            <Image
              className="object-contain"
              src={this.props.block.image}
              alt="headshot"
              width={250}
              height={250}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Block