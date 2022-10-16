import React from 'react'
import { faReact, faNode, faJava, faAws, faFigma, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IBlockIconsProps {
    icons: string[],
    klasse: string
}

const BlockIcons = ({icons, klasse}: IBlockIconsProps) => {
    return (
        <>
            {
                icons.map((icon, i) => {
                switch (icon) {
                    case 'react': {
                        return <FontAwesomeIcon title="React" className={klasse} key={i} icon={faReact} />
                    }
                    case 'node': {
                        return <FontAwesomeIcon title="NodeJs" className={klasse} key={i} icon={faNode} />
                    }
                    case 'java': {
                        return <FontAwesomeIcon title="Java" className={klasse} key={i} icon={faJava} />
                    }
                    case 'aws': {
                        return <FontAwesomeIcon title="AWS" className={klasse} key={i} icon={faAws} />
                    }
                    case 'figma': {
                        return <FontAwesomeIcon title="Figma" className={klasse} key={i} icon={faFigma} />
                    }
                    case 'vuejs': {
                        return <FontAwesomeIcon title="Vue JS" className={klasse} key={i} icon={faVuejs} />
                    }
                }
                })
            }
        </>
    )
}

export default BlockIcons;