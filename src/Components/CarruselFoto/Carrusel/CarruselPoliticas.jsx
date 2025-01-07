import Carousel from "react-bootstrap/Carousel";
import styles from "./carrusel.module.css";

const CarruselPoliticas = () => {
	return (
		<>
			<div className={styles.carruselPoliticasContainer}>
				<Carousel className={styles.carrusel}>
					<Carousel.Item interval={5000} className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Estrategia Nacional de Seguridad Pública</h3>
							<p>
								Desde 2018, México implementó un enfoque que combina programas
								sociales para atender las causas de la violencia con
								inteligencia operativa y la acción de las fuerzas de seguridad.
								Esto ha contribuido a la disminución de delitos como el
								secuestro (73.9%) y el feminicidio (19%)​
							</p>
							<a href="https://www.gob.mx/sspc/articulos/estrategia-nacional-de-seguridad-publica?idiom=es" target="_blanmket">Conoce más...</a>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000} className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Creación y despliegue de la Guardia Nacional</h3>
							<p>
								La Guardia Nacional, con 291 cuarteles y más de 259,000
								elementos desplegados, ha fortalecido la lucha contra el crimen
								organizado. Ha sido clave para desmantelar laboratorios
								clandestinos y decomisar drogas, armas y plantíos ilícitos
							</p>
							<a href="https://www.gob.mx/guardianacional/prensa/en-2021-guardia-nacional-concreta-despliegue-operativo-y-construccion-de-sus-cuarteles?idiom=es#:~:text=En%202021%2C%20Guardia%20Nacional%20concreta%20despliegue%20operativo%20y%20construcci%C3%B3n%20de%20sus%20cuarteles,-Guardia%20Nacional%20%7C%2020&text=A%20tres%20a%C3%B1os%20de%20su,la%20paz%20en%20el%20pa%C3%ADs." target="_blanket">Conoce más...</a>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item  interval={5000} className={styles.carruselSeccion}>
					
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Desmantelamiento de laboratorios clandestinos</h3>
							<p>
								Entre 2018 y 2023, se desmantelaron más de 1,800 laboratorios de
								metanfetaminas, afectando económicamente a los grupos delictivos
								y evitando la producción de miles de toneladas de drogas
								sintéticas
							</p>
							<a href="https://www.gob.mx/semar/prensa/la-secretaria-de-marina-a-traves-de-la-armada-de-mexico-localiza-y-desmantela-una-cueva-y-cuatro-laboratorios-clandestinos-con-aproximadamente-8-620-kilogramos-de-presunta-metanfetamina-en-culiacan-sinaloa?idiom=fr#:~:text=%2D%20La%20Secretar%C3%ADa%20de%20Marina%20a,la%20elaboraci%C3%B3n%20de%20drogas%20sint%C3%A9ticas." target="_blanket">Conoce más...</a>
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
							<a href="https://www.gob.mx/sspc/documentos/programa-nacional-para-la-prevencion-social-de-la-violencia-y-la-delincuencia-2022-2024" target="_blanket">Conoce más...</a>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}  className={styles.carruselSeccion}>
						
						<Carousel.Caption className={styles.carruselTexto}>
							<h3>Reducción de delitos estratégicos</h3>
							<p>
								Gracias a la coordinación entre fuerzas federales y estatales,
								se ha logrado una disminución significativa de homicidios, robo
								de vehículos y trata de personas en varios estados clave como
								San Luis Potosí​
							</p>
							<a href="https://www.gob.mx/sspc/prensa/reducen-delitos-del-fuero-federal-y-comun-con-la-estrategia-nacional-de-seguridad-en-2022#:~:text=Enero%20%2D%20Junio%202021-,Reducen%20delitos%20del%20fuero%20federal%20y%20com%C3%BAn%20con,Nacional%20de%20Seguridad%2C%20en%202022&text=La%20Estrategia%20Nacional%20de%20Seguridad%20ha%20permitido%20reducir%20en%202022,veh%C3%ADculos%20e%20hidrocarburos%2C%20entre%20otros." target="_blanket">Conoce más...</a>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};

export default CarruselPoliticas;
