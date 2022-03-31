import React from 'react'
import { faReact, faNode, faJava, faAws, faFigma, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlockIcons: React.FC<{icons: string[], class: string}> = props => {
    return (
        <>
            {
                props.icons.map((icon, i) => {
                switch (icon) {
                    case 'react': {
                        return <FontAwesomeIcon title="React" className={props.class} key={i} icon={faReact} />
                    }
                    case 'node': {
                        return <FontAwesomeIcon title="NodeJs" className={props.class} key={i} icon={faNode} />
                    }
                    case 'java': {
                        return <FontAwesomeIcon title="Java" className={props.class} key={i} icon={faJava} />
                    }
                    case 'aws': {
                        return <FontAwesomeIcon title="AWS" className={props.class} key={i} icon={faAws} />
                    }
                    case 'figma': {
                        return <FontAwesomeIcon title="Figma" className={props.class} key={i} icon={faFigma} />
                    }
                    case 'vuejs': {
                        return <FontAwesomeIcon title="Vue JS" className={props.class} key={i} icon={faVuejs} />
                    }
                }
                })
            }
        </>
    )
}

export default BlockIcons;