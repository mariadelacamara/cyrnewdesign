import * as React from 'react';
import { Component } from 'react';

import style from './style.scss';
import { Hero, DobleHome } from './../../componentes/partes';

interface Props {

}
interface State {
}

import fondo from '../../assets/home/fondo2.png';
import doble from '../../assets/home/doble.png';
import QuienesSomos from '../../componentes/QuienesSomos';
import QueHacemos from '../../componentes/quehacemos';


export default function Home(props:any){
    return (
        <div className={style.wrapper} id="home">
            <Hero imagen={fondo} />
            <DobleHome imagen={doble} />
            <QuienesSomos />
            <QueHacemos />
        </div>
    );
}