import Carousel from "react-bootstrap/Carousel";
import styles from "./carrusel.module.css";

const CarruselPoliticas = () => {
	return (
		<>
			<div className={styles.carruselPoliticasContainer}>
				<Carousel className={styles.carrusel}>
					<Carousel.Item interval={3000} className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Estrategia Nacional de Seguridad Pública</h3>
							<p>
								Desde 2018, México implementó un enfoque que combina programas
								sociales para atender las causas de la violencia con
								inteligencia operativa y la acción de las fuerzas de seguridad.
								Esto ha contribuido a la disminución de delitos como el
								secuestro (73.9%) y el feminicidio (19%)​
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000} className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Creación y despliegue de la Guardia Nacional</h3>
							<p>
								La Guardia Nacional, con 291 cuarteles y más de 259,000
								elementos desplegados, ha fortalecido la lucha contra el crimen
								organizado. Ha sido clave para desmantelar laboratorios
								clandestinos y decomisar drogas, armas y plantíos ilícitos
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item  interval={3000} className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Desmantelamiento de laboratorios clandestinos</h3>
							<p>
								Entre 2018 y 2023, se desmantelaron más de 1,800 laboratorios de
								metanfetaminas, afectando económicamente a los grupos delictivos
								y evitando la producción de miles de toneladas de drogas
								sintéticas
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>
								Programa Nacional para la Prevención Social de la Violencia
							</h3>
							<p>
								Este programa prioriza la prevención en comunidades vulnerables,
								abordando las causas de la violencia mediante educación, empleo
								y apoyo a jóvenes y mujeres en riesgo
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}  className={styles.carruselSeccion}>
						
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Reducción de delitos estratégicos</h3>
							<p>
								Gracias a la coordinación entre fuerzas federales y estatales,
								se ha logrado una disminución significativa de homicidios, robo
								de vehículos y trata de personas en varios estados clave como
								San Luis Potosí​
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};

export default CarruselPoliticas;
