import { useEffect, useState } from 'react';
import * as React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import style from './style.scss';

import logo from '../../assets/logo.png';

export default function Cabecera(props:any){
  const [togle,setTogle] = useState(true);
  return (
    <header className={style.cabecera}>
      <div onMouseDown={(e)=>setTogle(togle => !togle)} className={togle ? `${style.menuBoton}` : `${style.menuBoton} ${style.cerrado}`}>
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <nav className={togle ? `${style.menu} ${style.cerrado}` : `${style.menu} ${style.abierto}`}>
        <ul>
          <li><Link onMouseDown={()=>setTogle(togle => !togle)} to="/#root">Home</Link></li>
          <li><Link onMouseDown={()=>setTogle(togle => !togle)} to="/#quienessomos">Quienes Somos</Link></li>
          <li><Link onMouseDown={()=>setTogle(togle => !togle)} to="/#quehacemos">Que Hacemos</Link></li>
          <li><Link onMouseDown={()=>setTogle(togle => !togle)} to="/#contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div className={style.redes}>
        <a href="https://www.instagram.com/cyramoblamientos/" target="blank" className={style.item}><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/amoblamientoscyr" target="blank" className={style.item}><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.pinterest.es/cramoblamientos/" target="blank" className={style.item}><i className="fab fa-pinterest-p"></i></a>
        <div className={style.divisor}></div>
        <img src={logo} />
      </div>
    </header>
  );
}