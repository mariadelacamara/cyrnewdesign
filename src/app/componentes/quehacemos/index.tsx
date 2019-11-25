import { Component, useState } from 'react';
import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import style from './style.scss';

import cocinas from './asssets/cocinas.png';
import dormitorios from './asssets/dormitorios.png';
import vestidores from './asssets/vestidores.png';
import muebles from './asssets/muebles.png';
import banos from './asssets/banos.png';

export default function QueHacemos(props:any){
  
  return (
    <div className={style.contenedor} id="quehacemos">
        <Cocinas />
        <Triple />
        <Banos />
    </div>
  );
}

function Cocinas(props:any){
    return(
        <Link to="/cocinas" className={style.cocinas}>
            <div className={style.texto}>
                <h1>Estilo único en el corazón de tu casa</h1>
            </div>
            <div className={style.imagen}>
                <img src={cocinas} alt="cocinas" />
            </div>
            <div className={style.titulo}>
                cocinas
            </div>
            <div className={style.decorador}></div>
        </Link>
    );
}

function Triple(props:any){
    return(
        <div className={style.triple}>
            <Link to="/dormitorios" className={style.item}>
                <img src={dormitorios} alt="dormitorios"/>
                <h3>Dormitorios</h3>
            </Link>
            <Link to="/vestidores" className={style.item}>
                <img src={vestidores} alt="vestidores"/>
                <h3>Vestidores</h3>
            </Link>
            <Link to="/muebles" className={style.item}>
                <img src={muebles} alt="muebles"/>
                <h3>Muebles</h3>
            </Link>
            <div className={style.decorador}></div>
        </div>
    );
}

function Banos(props:any){
    return (
        <Link to="/banos" className={style.banos}>
            <div className={style.imagen}>
                <img src={banos} alt="banos" />
            </div>
            <div className={style.texto}>  
                <h1>Todo lo que buscás para tu hogar.</h1>
            </div>
            <div className={style.titulo}>
                Baños
            </div>
            <div className={style.decorador1}></div>
            <div className={style.decorador2}></div>
        </Link>
    );
}