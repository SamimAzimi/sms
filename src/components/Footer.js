import React from 'react'
import '../styles/common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone, faLaptopCode, faEnvelope
} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer>
            <div className='ContactUs'>

                <div className='groupfooter'>
                    <p className='footerHeadings'> <FontAwesomeIcon icon={faPhone} className="footerIcons" /> Contact US</p>
                    <p>+16478091193</p>
                </div>
            </div>
            <div className='PoweredBY'>

                <div className='groupfooter'>

                    <p className='footerHeadings'>  <FontAwesomeIcon icon={faLaptopCode} className="footerIcons" /> Power BY</p>
                    <p>ITSS (Information Technology Security Solution) </p>
                </div>
            </div>
            <div className='EmailUs'>
                <div className='groupfooter'>
                    <p className='footerHeadings'>  <FontAwesomeIcon icon={faEnvelope} className="footerIcons" /> Email US</p>
                    <p>Itss@gmail.com </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer