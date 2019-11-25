import * as React from 'react';
import { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './vistas/home';
import Pagina from './vistas/pagina/index';
import Linea from './vistas/linea/index';
import Historia from './vistas/historia/index';


export function Rutas(props:any){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cocinas" component={Pagina} />
            <Route exact strict path="/dormitorios" component={Pagina} />
            <Route exact strict path="/vestidores" component={Pagina} />
            <Route exact strict path="/quienes-somos" component={Historia} />
            <Route path="/cocinas/:linea" component={Linea} />
            <Route path="/dormitorios/:linea" component={Linea} />
            <Route path="/vestidores/:linea" component={Linea} />
            <Route path="/:linea" component={Linea} />
        </Switch>
    );
}