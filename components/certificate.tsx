import React from 'react'
import CertificateData from '../interfaces/CertificateData'
import { faAws, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class Certificate extends React.Component<{certificate: CertificateData}> {
    render() {
        return (
            <div className="w-70 h-60 float-left mr-16 p-5 rounded-3xl" style={{ backgroundColor: this.props.certificate.backgroundColor }}>
                {
                    this.props.certificate.icons.map((icon, i) => {
                        switch (icon) {
                            case 'aws': {
                                return <FontAwesomeIcon title="AWS" className="h-20 w-20 ml-auto mr-auto mb-2" key={i} icon={faAws} />
                            }
                            case 'vuejs': {
                                return <FontAwesomeIcon title="Vue JS" className="h-20 w-20 ml-auto mr-auto  mb-2" key={i} icon={faVuejs} />
                            }
                        }
                    })
                }
                <h2 className="text-2xl text-center">{ this.props.certificate.title }</h2>
                <p className="text-xl mt-5 max-w-xl"><b>Received: </b>{ this.props.certificate.received }</p>
            </div>
        )
    }
}

export default Certificate;