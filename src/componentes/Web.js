import React from 'react';
import Encabezado from './encabezado';
import Banner from './banner';
import Producto from './producto';
import Footer from './footer';

function Web(){
  return (
    <div className="container">
     <Encabezado/>
     <Banner/>
     <Producto/>
     <Footer/>
    </div>
  )

}
export default Web;