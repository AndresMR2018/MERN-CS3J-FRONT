import React, {useState, useEffect} from 'react';
import New from '../layout/New';
import Escudobar from '../layout/Escudobar';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {getProductos} from './apiCore';
import Card from './CardProducto';
import Cabecera from './Cabecera';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);

  const loadProductos = () => {
    getProductos().then(data => {
        if (data.error) {
            setError(error);
        } else {
            setProductos(data);
        }
    });
};

  useEffect(() => {
    loadProductos();
  }, [])

  return (
    <div>
      {/* <New/> */}
      <Escudobar/>
      <Navbar/>
      <Cabecera title="PRODUCTOS"/>
      <div className="container">
      <div className="row">
        {productos.map((producto, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
            <Card producto={producto} />
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;