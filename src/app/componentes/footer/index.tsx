import { Component, useState } from 'react';
import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import style from './style.scss';
import logo from '../../assets/logo.png';

export default function Footer(props:any){
  return (
    <footer className={style.piedepagina} >
        <div className={style.contenedorFooter} >
            <div className={style.contenedorFooter} >
                <h1 className={style.tituloFooter} >Navegacion</h1>
                <ul>
                    <li><Link to="/#home" >Home</Link></li>
                    <li><Link to="/#quienessomos" >Quienes Somos</Link></li>
                    <li><Link to="/#quehacemos" >Que Hacemos</Link></li>
                    <li><Link to="/#contacto" >Contacto</Link></li>
                </ul>
            </div>
            <div className={style.contenedorFooter}>
                <h1 className={style.tituloFooter}>Encontranos en:</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <div className={style.doble}>
                            <p>SHOWWROOM MAR DEL PLATA</p>
                            <p>Garay 1400 esq. Olavarria</p>
                        </div>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <div className={style.doble}>
                            <p>SHOWWROOM PINAMAR</p>
                            <p>Jupiter y Rivadavia</p>
                        </div>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <div className={style.doble}>
                            <p>SHOWWROOM VALERIA DEL MAR</p>
                            <p>Av. Espora 1590</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={style.contenedorFooter}>
                <h1 className={style.tituloFooter}>Redes Sociales:</h1>
                <ul className={style.redes}>
                    <li><a href="https://www.instagram.com/cyramoblamientos/"> &nbsp;<i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/amoblamientoscyr"> &nbsp;<i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.pinterest.es/cramoblamientos/"> &nbsp;<i className="fab fa-pinterest-p"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}