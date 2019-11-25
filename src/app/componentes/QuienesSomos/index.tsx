import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import styles from './styles.scss';

import fabrica from '../../assets/pagina/local.jpg';

export default function QuienesSomos() {
	return(
		<Link to="/quienes-somos" className={styles.link}>
			<div className={styles.container} id="quienessomos">
				<div className={styles.imagen}>
					<img src={fabrica} alt="fabrica" />
				</div>
				<div className={styles.texto}>
					<h1>Más de 10 años de experiencia en la industria.</h1>
				</div>
				<div className={styles.titulo}>
                quienes somos
				</div>
				<div className={styles.decorador}></div>
			</div>
		</Link>
	);
}
