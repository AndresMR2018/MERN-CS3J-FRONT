import React from "react";
import {Row, Col} from 'reactstrap';
import "./styles.css";

const Cabecera = ({
    title = "Titulo"
}) => (
    <div>
        <div className="jumbotron">
            <Row>
            <Col></Col>
        <Col><center><h2 style={{paddingTop:"80px"}}>{title}</h2></center></Col>
        <Col></Col>
            </Row>
        
        </div>
    </div>
);

export default Cabecera;