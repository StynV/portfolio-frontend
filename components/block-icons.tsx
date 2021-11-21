import React from 'react'
import { faReact, faNode, faJava, faAws, faFigma, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class BlockIcons extends React.Component<{icons: string[], class: string}> {
    render() {
        return (
            <>
                {
                    this.props.icons.map((icon, i) => {
                    switch (icon) {
                        case 'react': {
                            return <FontAwesomeIcon title="React" className={this.props.class} key={i} icon={faReact} />
                        }
                        case 'node': {
                            return <FontAwesomeIcon title="NodeJs" className={this.props.class} key={i} icon={faNode} />
                        }
                        case 'java': {
                            return <FontAwesomeIcon title="Java" className={this.props.class} key={i} icon={faJava} />
                        }
                        case 'aws': {
                            return <FontAwesomeIcon title="AWS" className={this.props.class} key={i} icon={faAws} />
                        }
                        case 'figma': {
                            return <FontAwesomeIcon title="Figma" className={this.props.class} key={i} icon={faFigma} />
                        }
                        case 'vuejs': {
                            return <FontAwesomeIcon title="Vue JS" className={this.props.class} key={i} icon={faVuejs} />
                        }
                    }
                    })
                }
            </>
        )
    }
}

export default BlockIcons;