import React from 'react';
import lubriffer from '../img/lubriffer.png';
import polaca from '../img/poloca.png';
import enterprise from '../img/enterprise.png';
import perseo from '../img/perseo.png';
import gplan from '../img/gplan.png';

const Auspiciantes = () =>{
    return(
        <>
        &nbsp;&nbsp;&nbsp;
<center>
<h2>Auspiciantes</h2>
    </center>
<div className="row w-100">
    <div className="col mb-6">
        <center>
        <img src={perseo} />    
        </center>
    </div>
    <div className="col mb-6">
        <center>
<img src={gplan} />
        </center>
    </div>
    </div> 

    <div className="row w-100">
    <div className="col mb-6">
        <center>
<img src={lubriffer} />
        </center>
    </div>
    <div className="col mb-6">
        <center>
<img src={polaca} />
        </center>
    </div>
    </div>

    <div className="row w-100">
    <div className="col mb-6">
        <center>
        <img src={enterprise} />
        </center>

    </div>

    <div className="col mb-6">
        <center>
        
        </center>

    </div>
    </div>
        </>
    )
}

export default Auspiciantes;