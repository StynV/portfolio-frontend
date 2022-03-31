import React from 'react'
import Image from 'next/image'

const FooterLink: React.FC<
    {
        link: string,
        text: string,
        src: StaticImageData
    }
> = props => {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
        >
            <Image
                className="object-contain"
                src={props.src}
                alt={props.text}
                title={props.text}
                width={80}
                height={70}
            />
        </a>
    )
}

export default FooterLink;