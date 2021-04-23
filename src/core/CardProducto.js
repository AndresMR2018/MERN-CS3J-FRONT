import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({producto}) => {
  const [count, setCount] = useState(producto.count)

  return (
    <div className="card m-10 card-cont">
      <div >
        <ShowImage  className="img" item={producto} url="producto"/>
        <p>Categoria del Producto: {producto.categoria_producto}
        <br/>
        Categoria de edad y género: {producto.categoria_persona}
        <br/>
        {producto.nombre}
        <br/>
        Marca: {producto.marca}
        <br/>
        Color: {producto.color}
        <br/>
        Descripción: {producto.descripcion}
        <br/>
        Valor: {producto.precio}
        <br/>
        Stock: {producto.cantidad}
        </p>
      
          <Link to={`/producto/${producto._id}`}>
            <button className="btn btn-success">Ver Mas</button>
          </Link>
      </div>
    </div>
  )
}

export default Card;