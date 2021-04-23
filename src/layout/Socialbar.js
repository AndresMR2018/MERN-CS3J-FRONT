import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './Socialbar.css';

const Socialbar = () =>{

    return(
        <div>
<nav className="navbar nav w-100 " style={{backgroundColor:"blue"}}>
        <div className="col-md-8">    
        </div>
        <div className="col-md-4">
        &nbsp;
        <FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp;
<FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;
<FontAwesomeIcon icon={faTwitter} /> &nbsp;
            | CONTACTO
        </div>
</nav>
        </div>
    )
}

export default Socialbar;