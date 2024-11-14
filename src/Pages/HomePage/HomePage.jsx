import styles from "./homePage.module.css"
import Organizaciones from "../../Components/Organizaciones/Organizaciones";
import MapaMexico from "../../Components/MapaMexico/MapaMexico";
import Noiticias from "../../Components/Noticias/Noiticias";
import Crimeflix from "../../Components/Crimeflix/crimeflix";




const HomePage = () => {


  return (
		<>
			<div className={styles.HomePageContainer}>
				<section className={styles.BannerHomePage}>
					<div className={styles.descripcion}>
						<p>
							<em>Narcotráfico MX </em>es una plataforma especializada en el <em>
              				análisis del narcotráfico en México</em>, proporcionando investigaciones y datos
							sobre <em>delincuencia organizada, tráfico de drogas, violencia y
							corrupción</em>. Nuestro sitio ofrece informes detallados sobre cómo
							estas actividades impactan a la sociedad, especialmente entre 
							<em> niños y adolescentes</em>, quienes son más vulnerables a ser reclutados
							por <em>grupos criminales</em>. Nos enfocamos en factores de riesgo, las
							conexiones entre el <em>crimen organizado</em> y las drogas ilícitas, y
							cómo las políticas públicas pueden reducir estos peligros. A
							través de contenido informativo y preventivo, buscamos
							desmitificar la vida criminal y ofrecer recursos educativos para
							la prevención. <em> Narcotráfico MX </em>es tu fuente confiable para
							entender los desafíos del narcotráfico en México, con el objetivo
							de informar y prevenir.
						</p>
					</div>
					<div className={styles.logo}>
						<img
							src="https://res.cloudinary.com/dujrua0vo/image/upload/v1729717158/NarcotraficoMX/NARCOTRA%CC%81FICO_MX_1_fi8tq9.png"
							alt=""
						/>
					</div>
				</section>
				<section>
				<h1>Principales organizaciones criminales y su presencia en territorio nacional</h1>
				</section>
				<section>
					<MapaMexico/>
				</section>
				<section>
					<Organizaciones/>
				</section>
				<section>
					<Crimeflix/>
				</section>
				<section>
					<Noiticias/>
				</section>
			</div>
		</>
	);
}

export default HomePage