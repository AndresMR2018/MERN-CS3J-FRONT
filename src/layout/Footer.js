import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import super32 from '../img/super32.png';

const Footer = () => {
  return (
    <footer>
        <div className="row w-100 ">
        <Container style={{backgroundColor:"#3957FF"}}>
            <Row>
             
                <Col>
                <center>
                <h3 className="py-2" style={{color:"white"}}>Contactos</h3></center>
                </Col>
                <Col>
                <center>
                <h3 className="py-2" style={{color:"white"}}>Ubicación</h3>
                <img src={super32}/>
                </center>
                </Col>
                <Col>
                <center>
                <h3 className="py-2" style={{color:"white"}}>Consultas</h3>
                </center>
                </Col>
            </Row>
            

        <Row>
          <Col className='text-center py-5' style={{color:"white"}}>Copyright 2021 &copy; ProShop</Col>
        </Row>
      </Container>
        </div>
   
    </footer>
  )
}

export default Footer;