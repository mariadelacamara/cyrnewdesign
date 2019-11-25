import * as React from 'react';
import { useState,useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import style from './style.scss';
import { Hero } from '../../componentes/partes';
import {lineas} from '../../datos';


import cocinas from '../../assets/pagina/cocinas.jpg';
import dormitorios from '../../assets/pagina/dormitorios.png';
import vestidores from '../../assets/pagina/vestidores.png';
import { string } from 'prop-types';

export default function Pagina(props:any){
    const [primeraVez, setPrimera] = useState<boolean>(true);
    const [imagen,setImagen] = useState<string>('');
    const [titulo,setTitulo] = useState<string>('');
    const [lineasActuales,setLineas] = useState<Array<any>>([]);

    useEffect(()=>{
        if (primeraVez){
            setPrimera(false);
            window.scrollTo(0, 0);
            switch(props.location.pathname){
                case '/cocinas':
                    setImagen(cocinas);
                    setTitulo('COCINAS');
                    setLineas(lineas.cocinas);
                    break;
                case '/dormitorios':
                    setImagen(dormitorios);
                    setTitulo('DORMITORIOS');
                    setLineas(lineas.dormitorios);
                    break;
                case '/vestidores':
                    setImagen(vestidores);
                    setTitulo('VESTIDORES');
                    setLineas(lineas.vestidores);
                    break;
            }
        }
    })
    return (
        <div className={style.wrapper}>
            <Hero imagen={imagen}/>
            <Lineas titulo={titulo} lineas={lineasActuales} />
        </div>
    );
}

interface item {
    titulo: string;
    imagen: string;
    url: string;
}

function Lineas(props:any, lineas:Array<any>){
    return(
        <div className={style.lineas}>
            <h1 className={style.titulogeneral}>LINEAS DE {props.titulo}</h1>
            <div className={style.contenedor}>
                {
                    props.lineas.map((linea:item,key:number)=>{
                        const estilo: React.CSSProperties = {
                            backgroundImage: `url(${linea.imagen})`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPositionY: 'center',
                        };
                        return (
                        <Link to={linea.url} key={key} style={estilo}>
                            <h3 className={style.titulolinea}>{linea.titulo}</h3>
                        </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}