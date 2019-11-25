import { Component, useState } from 'react';
import * as React from 'react';
import style from './partes.scss';

interface HeroProps {
    imagen: any;
}

export function Hero(props: HeroProps){
    return(
        <div className={style.hero}>
            <img src={props.imagen} alt="imagen"/>
        </div>
    );
}

interface DobleHomeProps {
    imagen: any;
}

export function DobleHome(props: DobleHomeProps){
    return (
        <div className={style.dobleHome}>
            <div className={style.dobleTexto}>
                <h1>El espacio <span>que vivís</span> todos los días, merece <span>el mayor diseño.</span></h1>
    {/*<p>Pensamos, diseñamos y fabricamos todo tipo de muebles para hacer tu vida mas confortable y practica.</p>*/}
            </div>
            <div className={style.decorador}></div>
        </div>
    );
}