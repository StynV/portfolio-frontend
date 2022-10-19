import React from 'react'
import { faReact, faNode, faJava, faAws, faFigma, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IBlockIconsProps {
    icon: string,
    klasse: string
}

const BlockIcon = ({icon, klasse}: IBlockIconsProps) => {

    switch(icon) {
        case 'react': {
            return <FontAwesomeIcon title="React" className={klasse} icon={faReact} />
        }
        case 'node': {
            return <FontAwesomeIcon title="NodeJs" className={klasse} icon={faNode} />
        }
        case 'java': {
            return <FontAwesomeIcon title="Java" className={klasse} icon={faJava} />
        }
        case 'aws': {
            return <FontAwesomeIcon title="AWS" className={klasse} icon={faAws} />
        }
        case 'figma': {
            return <FontAwesomeIcon title="Figma" className={klasse} icon={faFigma} />
        }
        case 'vuejs': {
            return <FontAwesomeIcon title="Vue JS" className={klasse} icon={faVuejs} />
        }
        default: {
            return <div></div>
        }
    }
    
}

export default BlockIcon;