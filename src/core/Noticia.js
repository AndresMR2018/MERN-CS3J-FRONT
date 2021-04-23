import React, {useState, useEffect} from 'react';
import New from '../layout/New';
import Escudobar from '../layout/Escudobar';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {getNoticias} from './apiCore';
import CardNoticia from './CardNoticia';
import Cabecera from './Cabecera';

const Noticia = () => {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(false);

  const loadNoticias = () => {
    getNoticias().then(data => {
        if (data.error) {
            setError(error);
        } else {
            setNoticias(data);
        }
    });
};

  useEffect(() => {
    loadNoticias();
  }, [])

  return (
    <div>
        <New/>
     
      <Escudobar/>
      <Navbar/>
      <Cabecera  title="NOTICIAS"/>
      <div className="row" style={{paddingTop:'50px', paddingBottom:'50px', paddingLeft:'100px'}}>
        {noticias.map((noticia, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
            <CardNoticia noticia={noticia} />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Noticia;