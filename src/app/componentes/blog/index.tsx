import { Component, useState, useEffect } from 'react';
import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import style from './style.scss';


export default function Blog(props:any){
  const [datos,setDatos] = useState<Array<any>>([]);
  function cargarDatos(){
    fetch(`http://www.cyramoblamientos.com/backend/wp-json/wp/v2/posts/`)
		.then((response) => response.json())
		.then((responseJson) => {
			   setDatos(responseJson);
		})
		.catch((error) => {
			console.error(error);
		});  
  }
  useEffect(()=>{
    cargarDatos();
  })
  return (
    <div className={style.contenedor} id="blog">
        <h1>BLOG</h1>
        <div className={style.lista}>
            {
              datos.map((post,key)=>{
                if (key <=2){
                  return <Item url={post.slug} imagen={post.fimg_url} key={key} />
                }
              })
            }
        </div>
    </div>
  );
}

function Item (props:any){
    return (
        <Link to={`/blog/${props.url}`} className={style.item}>
          <img src={props.imagen} alt={props.url} />
        </Link>
    )
}