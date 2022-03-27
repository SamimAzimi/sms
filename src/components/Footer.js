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
                <div>

                <FontAwesomeIcon icon={faPhone} className="footerIcons" />
                </div>
                <div className='groupfooter'>
                <p className='footerHeadings'>Contact US</p>
                <p>+93702109223</p>
                </div>
            </div>
             <div  className='PoweredBY'>
                 <div>
                 <FontAwesomeIcon icon={faLaptopCode} className="footerIcons" />
                 </div>
                 <div className='groupfooter'>

                <p className='footerHeadings'>Power BY</p>
                <p>ITSS (Information Technology Security Solution) </p>
                 </div>
            </div>
             <div className='EmailUs'>
                 <div>

                 <FontAwesomeIcon icon={faEnvelope} className="footerIcons" />
                 </div>
                 <div className='groupfooter'>

                <p className='footerHeadings'>Email US</p>
                 <p>Itss@gmail.com </p>
                 </div>

            </div>
            </footer>
    )
}

export default Footer