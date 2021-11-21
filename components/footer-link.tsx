import React from 'react'
import Image from 'next/image'

export class FooterLink extends React.Component<
    {
        link: string,
        text: string,
        src: StaticImageData
    }
> {
    render() {
        return (
            <a
                href={this.props.link}
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    className="object-contain"
                    src={this.props.src}
                    alt={this.props.text}
                    title={this.props.text}
                    width={50}
                    height={50}
                />
            </a>
        )
    }
}

export default FooterLink;