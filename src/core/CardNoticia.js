
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import './Card.css';
import ShowImage from './ShowImage';
import aguero from '../img/aguero.jpg';

const CardNoticia = ({noticia}) => {
  const [count, setCount] = useState(noticia.count)

  return (
    <Card style={{ width: '18rem'}}>
        <center>
         
        <ShowImage  style={{ width: '18rem'}} className="img" item={noticia} url="noticia"/>
        {/* <ShowImage variant="top" className="img" item={noticia} url="noticia"/> */}
        </center>
    
    <Card.Body>
      <Card.Title>{noticia.titulo}</Card.Title>
      <Card.Text>{noticia.contenido}
      </Card.Text>
      <Button variant="primary">Leer más</Button>
    </Card.Body>
  </Card>
  )
}

export default CardNoticia;