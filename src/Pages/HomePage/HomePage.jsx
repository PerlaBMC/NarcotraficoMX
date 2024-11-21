import styles from "./homePage.module.css";
import Organizaciones from "../../Components/Organizaciones/Organizaciones";
import MapaMexico from "../../Components/MapaMexico/MapaMexico";
import Noiticias from "../../Components/Noticias/Noiticias";
import Crimeflix from "../../Components/Crimeflix/Crimeflix";

const HomePage = () => {
	const noticias = [
		{ id: 1, titulo: "Noticia 1", fecha: "2024-11-15" },
		{ id: 2, titulo: "Noticia 2", fecha: "2024-11-16" },
		{ id: 3, titulo: "Noticia 3", fecha: "2024-11-17" },
		{ id: 4, titulo: "Noticia 4", fecha: "2024-11-18" },
		{ id: 5, titulo: "Noticia 5", fecha: "2024-11-19" },
		{ id: 6, titulo: "Noticia 6", fecha: "2024-11-20" },
	];

	// Filtrar los últimos 5 objetos (ordenados por fecha si es necesario)
	const ultimasNoticias = noticias
		.slice(-5) // Toma los últimos 5 elementos del array
		.reverse(); // Opcional: para mostrar de más reciente a menos reciente


	return (
		<>
			<div className={styles.HomePageContainer}>
				<section className={styles.BannerHomePage}>
					<div className={styles.descripcion}>
						<p>
							<em>Narcotráfico MX </em>es una plataforma especializada en el{" "}
							<em>análisis del narcotráfico en México</em>, proporcionando
							investigaciones y datos sobre{" "}
							<em>
								delincuencia organizada, tráfico de drogas, violencia y
								corrupción
							</em>
							. Nuestro sitio ofrece informes detallados sobre cómo estas
							actividades impactan a la sociedad, especialmente entre
							<em> niños y adolescentes</em>, quienes son más vulnerables a ser
							reclutados por <em>grupos criminales</em>. Nos enfocamos en
							factores de riesgo, las conexiones entre el{" "}
							<em>crimen organizado</em> y las drogas ilícitas, y cómo las
							políticas públicas pueden reducir estos peligros. A través de
							contenido informativo y preventivo, buscamos desmitificar la vida
							criminal y ofrecer recursos educativos para la prevención.{" "}
							<em> Narcotráfico MX </em>es tu fuente confiable para entender los
							desafíos del narcotráfico en México, con el objetivo de informar y
							prevenir.
						</p>
					</div>
					<div className={styles.logo}>
						<img
							src="https://res.cloudinary.com/dujrua0vo/image/upload/v1729717158/NarcotraficoMX/NARCOTRA%CC%81FICO_MX_1_fi8tq9.png"
							alt=""
						/>
					</div>
				</section>
				<section className={styles.TituloHome}>
					<h1>
						Principales organizaciones criminales y su presencia en territorio
						nacional
					</h1>
				</section>
				<section id="mapa">
					<MapaMexico />
				</section>
				<section id="orgs">
					<Organizaciones />
				</section>
				<section>
					<Crimeflix video="https://www.youtube.com/embed/VKcqEjKSS18" />
				</section>
				<section>
				<Noiticias noticias={ultimasNoticias} />
				</section>
			</div>
		</>
	);
};

export default HomePage;
