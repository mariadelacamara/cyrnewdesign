import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Rutas } from './app/rutas';
import Cabecera from './app/componentes/cabecera';
import Contacto from './app/componentes/contacto';
import Footer from './app/componentes/footer';



class App extends Component<{},{}>{
  render() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Rutas />
            <Contacto />
            <Footer />
        </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('root'));
