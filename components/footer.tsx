import React from 'react'
import styles from '../styles/Home.module.css'
import Github from '../images/Github.png'
import Linkedin from '../images/Linkedin.png'
import Twitter from '../images/Twitter.png'
import FooterLink from './footer-link'

export class Footer extends React.Component<{}> {
    render() {
        return (
            <footer className={styles.footer}>
                <div>
                    <div className="mb-3 text-xl">STYN.VERCAUTEREN@OUTLOOK.COM</div>
                    <div className="text-center">
                        <FooterLink
                            link="https://github.com/StynV/portfolio-backend"
                            text="Backend source code"
                            src={Github}
                        />
                        
                        <FooterLink
                            link="https://github.com/StynV/portfolio-frontend"
                            text="Frontend source code"
                            src={Github}
                        />
                        
                        <FooterLink
                            link="https://www.linkedin.com/in/styn-vercauteren-96918018b/"
                            text="LinkedIn"
                            src={Linkedin}
                        />
                        
                        <FooterLink
                            link="https://twitter.com/KineticVermin79"
                            text="Twitter"
                            src={Twitter}
                        />
                    </div>
                </div>
            </footer>            
        )
    }
}

export default Footer;