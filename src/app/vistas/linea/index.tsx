import * as React from 'react';
import { useState,useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import style from './style.scss';
import { Hero } from '../../componentes/partes';
import {lineas} from '../../datos';

import {paginas} from '../../datos';


interface Dato{
    titulo: string;
    textoFondo1: string;
    textoFondo2: string;
    texto: string;
    imagen1: string;
    imagen2: string;
    tituloConoce: string;
    texto1Conoce: string;
    texto2Conoce: string;
    imagen1Conoce: string;
    imagen2Conoce: string;
}

export default function Linea({match}){
    const [primeraVez, setPrimera] = useState<boolean>(true);
    const [datos,setDatos] = useState<Dato | any>({});
    useEffect(()=>{
        if (primeraVez){
            setPrimera(false);
            console.log(match.params.linea);
            window.scrollTo(0, 0);
            switch (match.params.linea){
                case 'dormitorio':
                    setDatos(paginas.dormitorios.dormitorios);
                    break;
                case 'juveniles':
                        setDatos(paginas.dormitorios.juveniles);
                    break;
                case 'banos':
                    setDatos(paginas.banos);
                    break;
                case 'muebles':
                    setDatos(paginas.muebles);
                    break;
                case 'florencia':
                    setDatos(paginas.vestidores.florencia);
                    break;
                case 'roma':
                    setDatos(paginas.vestidores.roma);
                    break;
                case 'genova':
                    setDatos(paginas.vestidores.genova);
                    break;
                case 'pieldevidrio':
                    setDatos(paginas.cocinas.piel);
                    break;
                case 'termoformado':
                    setDatos(paginas.cocinas.termoformado);
                    break;
                case 'rauvisio':
                    setDatos(paginas.cocinas.rauvisio);
                    break;
                case 'melamina':
                    setDatos(paginas.cocinas.melamina);
                    break;
                case 'laca':
                    setDatos(paginas.cocinas.laca);
                    break;
            }
        }
    })
    return (
        <div className={style.wrapper}>
            <Inicio datos={datos} />
          {/*  <ConoceMas datos={datos} />*/}
        </div>
    )
}

function Inicio(props:any){
    let datos = props.datos;
    return (
        <div className={style.inicio}>
            <img src={datos.imagen1} className={style.imagen1} />
            <img src={datos.imagen2} className={style.imagen2} />
            <h1 className={style.titulo}>{datos.titulo}</h1>
            <div className={style.texto}>
                <p className={style.textointerno}>{datos.texto1}</p>
                <p className={style.textointerno}>{datos.texto2}</p>
                <p className={style.textointerno}>{datos.texto3}</p>
                <a href={datos.conocemas} target='blank' className={style.botonconocer}>Conocer Mas</a>
            </div>
        </div>
    )
}

function ConoceMass(props:any){
    let datos = props.datos;
    return (
        <div className={style.conoceMas} id="conoceMas">
            <h2>{datos.tituloConoce}</h2>
            <h4>{datos.texto1Conoce}</h4>
            <p>{datos.texto2Conoce}</p>
            <img src={datos.imagen1Conoce} className={style.imagen1} />
            <img src={datos.imagen2Conoce} className={style.imagen2} />
        </div>
    )
}