import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

import style from './style.scss';

export default function Entrada(props:any){
    const [primeraVez,setPrimeraVez] = useState<boolean>(true);
    const [titulo,setTitulo] = useState<string>("Cargando...");
    const [cuerpo,setCuerpo] = useState<string>("");
    const [imagen,setImagen] = useState<string>("https://dummyimage.com/1920x1080/8f8f8f/fff.png&text=Cargando...");
    const contenido = useRef();
    useEffect(
        ()=>{
        if (primeraVez){
            setPrimeraVez(false);
            window.scrollTo( 0, 0 );
            fetch(`http://www.cyramoblamientos.com/backend/wp-json/wp/v2/posts/`)
                .then((response:any)=>response.json())
                .then((responseJson:any)=>{
                    responseJson.map((post:any,key:number)=>{
                        if (post.slug == props.match.params.slug){
                            console.log(post);
                            setImagen(post.fimg_url);
                            setTitulo(post.title.rendered);
                            setCuerpo(post.content.rendered);
                        }
                    })
               })
        }            
    });
    return (
        <div className={style.wrapper}>
            <img src={imagen} alt={titulo}/>
            <div className={style.titulares}>
                <h1>{titulo}</h1>
            </div>
            <div className={style.cuerpo} dangerouslySetInnerHTML={{ __html: cuerpo }}></div>
        </div>
    );
}