import styles from "./acercaDeNosotros.module.css";
import { Link } from "react-router-dom";

const AcercaDeNosotros = () => {
	return (
		<>
			<div className={styles.aboutUsContainer}>
				<h3>Acerca de Nosotros</h3>
				<p>
					Narcotráfico MX es un proyecto educativo y de divulgación que busca
					analizar el fenómeno del narcotráfico en México desde un enfoque
					multidisciplinario. Nuestro objetivo es proporcionar información
					clara, objetiva y basada en investigaciones para fomentar la
					comprensión de este problema y sus consecuencias sociales, económicas
					y políticas.
				</p>
				<h6>Nuestra Misión:</h6>
				<p>
					Informar y educar a través de datos relevantes sobre el narcotráfico
					en México, promoviendo la reflexión crítica y el desarrollo de
					políticas públicas efectivas.
				</p>
				<h6>Nuestra Visión:</h6>
				<p>
					Ser un referente confiable en México y el mundo para el análisis del
					crimen organizado, contribuyendo a la prevención y a la construcción
					de soluciones integrales que favorezcan el bienestar social.
				</p>
				<h6>¿Qué encontrarás en nuestro sitio?</h6>
				<li>Información histórica y actual sobre el narcotráfico en México.</li>
				<li>
					Análisis de los impactos sociales del crimen organizado, especialmente
					en poblaciones vulnerables.
				</li>
				<li>
					Recursos para académicos y estudiantes en criminología, sociología y
					derecho.
				</li>
				<li>
					Noticias y reflexiones enfocadas en la prevención y la
					sensibilización.
				</li>
				<h6>Compromiso con nuestros usuarios:</h6>
				<p>
					Nos esforzamos por mantener un contenido ético, informativo y alineado
					con políticas que respeten la dignidad humana y promuevan la
					construcción de soluciones frente a la problemática del narcotráfico.
				</p>
                <h6>Consulta nuestros apartados</h6>
                <li><Link to={"/Terminos"}>Terminos y Condiciones</Link></li>
                <li><Link to={"/Politicas"}>Políticas de privacidad</Link></li>
			</div>
		</>
	);
};

export default AcercaDeNosotros;
