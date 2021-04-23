import React from 'react';
import super3 from '../img/super3.png';
//import super32 from '../img/super32.png';
import '../layout/Escudobar.css';
const Escudobar =()=>{
    return (
        <div>
    <nav class="navbar nav w-100" id="Escudobar" style={{backgroundColor:"blue"}}>
    <div className="col-md-4">
        <center>
        <img src={super3}/>
        </center>
    </div>
    <div className="col-md-4">
        <center>
        <img src={super3}/>
        </center>
    </div>
    <div className="col-md-4">
        <center>
        <img src={super3}/>
        </center>
    </div>
</nav>


        </div>
    )
}

export default Escudobar;