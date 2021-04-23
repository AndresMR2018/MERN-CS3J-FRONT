import React from 'react';
import New from '../layout/New';
import Escudobar from '../layout/Escudobar';
import Navbar from '../layout/Navbar';
import Carousel from './Carousel';
import Acerca from './Acerca';
import Auspiciantes from '../layout/Auspicio';
import Footer from '../layout/Footer';
const Club= ()=>{
return(
    <>
    {/* <New/> */}
    <Escudobar/>
    <Navbar/>
    <Carousel/>
    <Acerca/>
    <Auspiciantes/>
    <Footer/>
    </>
)
}

export default Club;