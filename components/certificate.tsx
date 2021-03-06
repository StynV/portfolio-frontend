import React from 'react'
import CertificateData from '../interfaces/CertificateData'
import { faAws, faVuejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Certificate: React.FC<{certificate: CertificateData}> = props => {
    const iconClass="h-20 w-20 ml-auto mr-auto mb-2";
    
    return (
        <div
            className="lg:w-70 lg:h-60 w-80 h-80 float-left mr-16 mb-10 lg:mb-0 p-5 rounded-3xl"
            style={{ backgroundColor: props.certificate.backgroundColor }}
        >
            {
                props.certificate.icons.map((icon, i) => {
                    switch (icon) {
                        case 'aws': {
                            return <FontAwesomeIcon title="AWS" className={iconClass} key={i} icon={faAws} />
                        }
                        case 'vuejs': {
                            return <FontAwesomeIcon title="Vue JS" className={iconClass} key={i} icon={faVuejs} />
                        }
                        case 'react': {
                            return <FontAwesomeIcon title="React" className={iconClass} key={i} icon={faReact} />
                        }
                    }
                })
            }
            <h2 className="lg:text-2xl text-4xl text-center">{ props.certificate.title }</h2>
            <p className="lg:text-xl text-2xl lg:mt-5 mt-10 max-w-xl text-center"><b>Received: </b>{ props.certificate.received }</p>
        </div>
    )
}

export default Certificate;