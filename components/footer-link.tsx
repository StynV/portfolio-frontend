import React from 'react'
import Image from 'next/image'

interface IFooterLinkProps {
    link: string,
    text: string,
    src: StaticImageData
}

const FooterLink = ({link, text, src}: IFooterLinkProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <Image
                className="object-contain"
                src={src}
                alt={text}
                title={text}
                width={80}
                height={70}
            />
        </a>
    )
}

export default FooterLink;