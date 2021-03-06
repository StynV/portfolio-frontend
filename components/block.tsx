import React from 'react'
import BlockData from '../interfaces/BlockData'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlockIcons from './block-icons'

const Block: React.FC<{
  block: BlockData,
  class: string,
  titleClass: string
}> = props => {
  return (
    <>
      <h1 className={props.titleClass}>{ props.block.title }</h1>
      <div className={props.class} style={{ backgroundColor: props.block.backgroundColor }}>
        <div>
            <h2 className="lg:text-3xl text-4xl">{ props.block.subtitle }</h2>
            <p className="lg:text-xl text-2xl mt-5 max-w-xl text-justify">{ props.block.body }</p>
            <p className="lg:text-xl text-2xl mt-5 max-w-xl"><b>Experience:</b> { props.block.duration }</p>
            <BlockIcons icons={ props.block.icons } class="lg:h-10 lg:w-10  h-14 w-14  mt-5 mr-2 float-left" />
        </div>
        <div className={styles.blockFoto}>
          <Image
            className="object-contain"
            src={props.block.image}
            alt="headshot"
            width={250}
            height={250}
          />
        </div>
      </div>
    </>
  )
}

export default Block