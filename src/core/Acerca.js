import React from 'react';
import './Acerca.css';
import modelo from '../img/modelo.png';
import clublogo from '../img/clublogo.png';
const Acerca = () =>{
return(
    <div className="acerca">

        <div className="row w-100">

                <div className="col mb-3">
                    <h2>Misión</h2> 
                        <p>
                        Posicionar al Club Sport «3 de Julio» como la institución deportiva número uno en la región, proyectándola como un referente de modelo deportivo y social en el país orientado a la excelencia apoyado con un proyecto de largo plazo que asegure el desarrollo sostenido cumpliendo el marco institucional, legal, social y deportivo.
                        </p>
<br/>
<br/>
<br/>
                        <h2>Visión</h2>
        <p>Ser el mejor equipo del fútbol del Ecuador.</p>
                </div>
                     {/* columna */}

                <div className="col mb-3">
                    <center><img src={modelo} style={{ width: "50%", height:"50%" }} /></center>
                    
                </div>
                <div className="col mb-6">
                    <center><img src={clublogo} style={{ width: "90%", height:"90%" }} /></center>
                    
                </div>
        </div> 
        {/* fila */}
        
        
        </div>
)

}

export default Acerca;