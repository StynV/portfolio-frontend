import React from 'react'
import CertificateData from '../interfaces/CertificateData'
import { faAws, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Certificate extends React.Component<{certificate: CertificateData}> {
    render() {
        const iconClass="h-20 w-20 ml-auto mr-auto mb-2";
        
        return (
            <div className="lg:w-70 lg:h-60 w-80 h-80 float-left mr-16 p-5 rounded-3xl" style={{ backgroundColor: this.props.certificate.backgroundColor }}>
                {
                    this.props.certificate.icons.map((icon, i) => {
                        switch (icon) {
                            case 'aws': {
                                return <FontAwesomeIcon title="AWS" className={iconClass} key={i} icon={faAws} />
                            }
                            case 'vuejs': {
                                return <FontAwesomeIcon title="Vue JS" className={iconClass} key={i} icon={faVuejs} />
                            }
                        }
                    })
                }
                <h2 className="lg:text-2xl text-4xl text-center">{ this.props.certificate.title }</h2>
                <p className="lg:text-xl text-2xl lg:mt-5 mt-10 max-w-xl text-center"><b>Received: </b>{ this.props.certificate.received }</p>
            </div>
        )
    }
}

export default Certificate;