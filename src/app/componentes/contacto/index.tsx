import { Component, useState } from 'react';
import * as React from 'react';
import * as emailjs from "emailjs-com";
import style from './style.scss';

export default function Contacto(props: any){
    const [nombre,setNombre] = useState<string>('');
    const [apellido,setApellido] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [mensaje,setMensaje] = useState<string>('');
    function enviarMail(){
		emailjs.send('mailjet', 'cyr', {nombre:nombre,apellido:apellido,email:email,mensaje:mensaje})
	    .then(function(response:any) {
	       console.log(response);
	    }, function(error:any) {
	    	console.log(error);
	    });
    }
    return(
        <div className={style.contenedor} id="contacto">
            <h3>contacto</h3>
            <h2 className={style.contactotitle}> ¿TENÉS PENSADO REFORMAR TU CASA?</h2>
            <p className={style.contactotxt}>Envianos un mail con tu idea a <span className={style.textospan}>cyramoblamientos@gmail.com</span> o completá este formulario!</p>
            <form method="post">
                <div className={style.fila}>
                    <input type="text" name="nombre" placeholder="Ingresá tu nombre" required value={nombre} onChange={(e)=> setNombre(e.currentTarget.value)} />
                    <input type="text" name="apellido" placeholder="Ingresá tu apellido" required value={apellido} onChange={(e)=> setApellido(e.currentTarget.value)} />
                </div>
                <div className={style.fila}>
                    <input type="email" name="mail" placeholder="Ingresá tu mail" required value={email} onChange={(e)=> setEmail(e.currentTarget.value)} />
                </div>
                <div className={style.fila} id="area">
                    <textarea name="mensaje" placeholder="Escribinos tu mensaje" required value={mensaje} onChange={(e)=> setMensaje(e.currentTarget.value)}></textarea>
                </div>
                <div className={style.fila}>
                    <button className={style.botoncontacto} onMouseDown={(e)=>enviarMail()}>Enviar Mensaje</button>
                </div>
            </form>
        </div>
    );
}
