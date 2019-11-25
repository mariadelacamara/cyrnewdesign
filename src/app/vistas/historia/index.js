import React, {useEffect} from 'react'; 

import nosotros from '../../assets/pagina/rubenycari2.jpg';
import fabrica from '../../assets/pagina/fabrica1.png';
import valeria from '../../assets/pagina/showroomvaleria.jpg';
import mdp from '../../assets/pagina/showroommdp.jpg';
import pinamar from '../../assets/pagina/showroompinamar.jpg';

import style from './style.scss';

export default function Historia () {
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	});
	return (
		<div className={style.historia}>
			<h1 className={style.titulo}>Quienes Somos</h1>
			<div className={style.nosotros}>
				<img src={nosotros} className={style.foto}></img>
				<div className={style.textonos}>
					<p>CYR nace en la Costa Atlántica y se dedica a la <span className={style.textospan}>fabricación</span> de amoblamientos. </p>
					<p>Abrimos una casa de herrajes en 2006 y esa fue nuestra puerta de entrada a este apasionante mundo</p>
					<p className={style.nodisplay}>Notamos que existía una demanda no cubierta de muebles funcionales, lo que nos impulsó a dedicarnos a la fabricación. </p>
					<p>El principal distintivo que tenemos CYR es la <span className={style.textospan}>personalización</span>.</p> 
					<p>Si bien contamos con algunos productos genéricos, en su mayoría diseñamos y construimos los proyectos cubriendo las necesidades de cada cliente.</p>
					<p>La composición de cada pieza se hace de forma <span className={style.textospan}>colaborativa</span></p>
					<p className={style.nodisplay}>El objetivo de nuestro servicio es que, con nuestro asesoramiento, elijas cada detalle del diseño, dimensiones, estilos y colores y, de esta forma, estés involucrado con nosotros desde el nacimiento de la idea hasta verla hecha mueble. </p>
				</div>
			</div>
			<div className={style.nosotros2}>
				<div className={style.textonos}>
					<p className={style.nodisplay}>Contamos con una visión <span className={style.textospan}>vanguardista</span>, nos gusta impactar con tendencias innovadoras por tal motivo estamos permanentemente investigando y viajando para que nuestros productos tengan un sello diferenciado y exclusivo .  </p> 
					<p>El mundo de los muebles, como todo, evolucionó, y nosotros tratamos de estar alineados con eso, sin perder de vista lo <span className={style.textospan}>artesanal</span>.</p>
					<p>Logramos ser una mezcla entre el antiguo carpintero que ofrecía el mueble único, y las cadenas que ofrecen productos genéricos prefabricados.</p>
					<p>Somos todo eso y, principalmente, <span className={style.textospan}>amamos</span>lo que hacemos</p>
				</div>				
				<img src={fabrica} className={style.foto}></img>
			</div>
			<h3 className={style.titulo}>Showrooms</h3>
			<p className={style.textoshowrooms}>Además de nuestros showrooms, contamos con servicio para <span className={style.textospan}>todo el país</span>. No dudes en consultarnos estés donde estés!</p>
			<div className={style.showrooms}>
				<div className={style.flip}>
					<div className={style.flipinner}>
						<div className={style.cardfront}>
							<img src={valeria} className={style.card}></img>
						</div>
						<div className={style.cardback}>
							<h2>Valeria del Mar</h2>
							<h3>Av. Espora 1590</h3>
							<h4>Tel: 2254-494333</h4>
						</div>
					</div>
				</div>
				<div className={style.flip}>
					<div className={style.flipinner}>
						<div className={style.cardfront}>
							<img src={pinamar} className={style.card}></img>
						</div>
						<div className={style.cardback}>
							<h2>Pinamar</h2>
							<h3>Jupiter y Rivadavia</h3>
							<h4>Tel: 2254-490299</h4>
						</div>
					</div>
				</div>
				<div className={style.flip}>
					<div className={style.flipinner}>
						<div className={style.cardfront}>
							<img src={mdp} className={style.card}></img>
						</div>
						<div className={style.cardback}>
							<h2>Mar del Plata</h2>
							<h3>Garay 1400</h3>
							<h4>Tel: 223-3007424</h4>
						</div>
					</div>
				</div>
			</div>
			<div className={style.showroomsmobile}>
				<div className={style.showroom}>
					<img src={valeria}></img>
					<div className={style.showroomdireccion}>
						<h2>Valeria del Mar</h2>
						<p>Av. Espora 1590</p>
						<p>Tel: 2254-494333</p>
					</div>
				</div>
				<div className={style.showroom}>
					<div className={style.showroomdireccion}>
						<h2>Pinamar</h2>
						<p>Jupiter y Rivadavia</p>
						<p>Tel: 2254-494333</p>
					</div>
					<img src={pinamar}></img>
				</div>
				<div className={style.showroom}>
					<img src={mdp}></img>
					<div className={style.showroomdireccion}>
						<h2>Mar del Plata</h2>
						<p>Garay 1400</p>
						<p>Tel: 223-3007424</p>
					</div>
				</div>
			</div>
		</div>
	);
}