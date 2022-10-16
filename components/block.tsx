import React from 'react'
import BlockData from '../interfaces/BlockData'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlockIcons from './block-icons'

interface IBlockProps {
  block: BlockData,
  klasse: string,
  titleClass: string
}

const Block = ({block, klasse, titleClass}: IBlockProps) => {
  return (
    <>
      <h1 className={titleClass}>{ block.title }</h1>
      <div className={klasse} style={{ backgroundColor: block.backgroundColor }}>
        <div>
            <h2 className="lg:text-3xl text-4xl">{ block.subtitle }</h2>
            <p className="lg:text-xl text-2xl mt-5 max-w-7xl text-justify">{ block.body }</p>
            <p className="lg:text-xl text-2xl mt-5 max-w-xl"><b>Experience:</b> { block.duration }</p>
            <BlockIcons icons={ block.icons } klasse="lg:h-10 lg:w-10  h-14 w-14  mt-5 mr-2 float-left" />
        </div>
        <div className={styles.blockFoto}>
          <Image
            className="object-contain"
            src={block.image}
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