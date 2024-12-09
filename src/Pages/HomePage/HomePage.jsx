import styles from "./homePage.module.css";
import Organizaciones from "../../Components/Organizaciones/Organizaciones";
import MapaMexico from "../../Components/MapaMexico/MapaMexico";
import Noiticias from "../../Components/Noticias/Noiticias";
import Crimeflix from "../../Components/Crimeflix/Crimeflix";
import Mision_Vision from "../../Components/Mision-Vision/Mision_Vision";
import CarruselPoliticas from "../../Components/CarruselFoto/Carrusel/CarruselPoliticas";

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
							<em>Narcotráfico MX</em> es una plataforma especializada en el
							análisis del
							<em> narcotráfico en México</em>, diseñada como una herramienta
							informativa para comprender este fenómeno desde una perspectiva
							crítica y educativa. Nuestro enfoque abarca investigaciones y
							datos sobre
							<em>
								{" "}
								delincuencia organizada, tráfico de drogas, violencia,
								corrupción y sus impactos sociales
							</em>
							, especialmente en niños y adolescentes vulnerables al
							reclutamiento por grupos criminales. El sitio analiza factores de
							riesgo como las drogas ilícitas, la pobreza y la falta de
							oportunidades, además de explorar cómo las políticas públicas
							multidisciplinarias pueden mitigar estos problemas. Proporcionamos
							contenido educativo, preventivo y basado en evidencia para
							desmitificar la <em>vida criminal</em> y promover la reflexión
							crítica. Además, el proyecto documenta la historia de
							<em> agrupaciones delictivas</em> y la vida de sus miembros,
							consolidando información valiosa para estudiantes y profesionales
							en
							<em> criminología, sociología criminal y derecho</em>.
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
					<Mision_Vision />
				</section>
				<section className={styles.TituloHome}>
					<h2>
						Principales organizaciones criminales y su presencia en territorio
						nacional
					</h2>
					<p>
						En México operan diversas organizaciones criminales con gran impacto
						territorial y social. Entre las principales destacan el Cártel de
						Sinaloa y el Cártel Jalisco Nueva Generación (CJNG), con control de
						rutas estratégicas de tráfico. Otros grupos relevantes incluyen el
						Cártel del Golfo, Los Zetas, y remanentes de los Beltrán Leyva y el
						Cártel de Tijuana. Estas organizaciones influyen en múltiples
						estados, afectando la seguridad y desarrollo. Nuestro análisis
						fomenta la reflexión académica y la búsqueda de soluciones
						integrales.
					</p>
				</section>
				<section id="mapa">
					<MapaMexico />
				</section>
				<section id="orgs">
					<p>
						Puedes explorar cada una de las organizaciones criminales para
						conocer información educativa sobre su impacto en diferentes
						regiones, su expansión territorial y las dinámicas internas,
						incluyendo las células asociadas. Este análisis tiene fines
						informativos y está diseñado para fomentar la reflexión sobre cómo
						abordar el fenómeno mediante políticas de prevención y seguridad.
					</p>
					<Organizaciones />
				</section>
				<section>
					<h2>Políticas implementadas contra el Crimen Organizado en México</h2>
					<CarruselPoliticas/>
				{/*<Crimeflix video="https://www.youtube.com/embed/VKcqEjKSS18" />*/}
				</section>
				<section>
					<h2>Historia y Perspectiva: Noticias Relevantes</h2>
					<p>
						En esta sección encontrarás noticias relacionadas con el
						narcotráfico en México. Nuestro objetivo es informar sobre eventos
						históricos, reflexionar sobre su impacto social y conmemorar a las
						víctimas de este fenómeno. A través de este análisis, buscamos
						sensibilizar sobre la importancia de prevenir que sucesos similares
						se repitan y promover soluciones integrales basadas en políticas
						públicas multidisciplinarias.
					</p>
					<Noiticias noticias={ultimasNoticias} />
				</section>
			</div>
		</>
	);
};

export default HomePage;
