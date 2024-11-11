import styles from "./noticiaPAge.module.css";
import TituloDeSeccion from "../../Components/TituloDeSección/TituloDeSeccion";

const NoticiaPage = () => {
	return (
		<>
			<div className={styles.noticiaPageContainer}>
				<div className={styles.backGroundNoticia}>
					<h3 className={styles.tituloDeNoticia}>
						Peso pluma, uno de los principales exponentes de los denominados
						corridos bélicos es captado en romance con Diana Esparragoza, nieta
						del ex narcotráficante Juan José Esparagoza "El Azul"
					</h3>
					<p>
						En el mundo del entretenimiento mexicano, las historias de
						celebridades se entrelazan con frecuencia con figuras asociadas a la
						narcocultura. Recientemente, surgieron rumores de una relación entre
						el popular cantante de corridos tumbados, Peso Pluma, y Diana
						Esparragoza, nieta de Juan José Esparragoza Moreno, mejor conocido
						como "El Azul," uno de los fundadores del Cártel de Sinaloa. Esta
						relación ha capturado la atención de medios y seguidores, quienes
						especulan sobre la influencia de la narcocultura en el
						entretenimiento y cómo figuras del mundo del narcotráfico buscan
						aceptación social y mediática a través de la música y las redes
						sociales.
					</p>
					<img
						className={styles.imagenUno}
						src="https://www.elsoldesinaloa.com.mx/gossip/u0rgd2-peso-pluma/alternates/LANDSCAPE_400/peso-pluma"
						alt=""
					/>
					<h5>
						La Historia de Peso Pluma y Diana Esparragoza: Entre la Música y el
						Narcotráfico
					</h5>
					<p>
						Peso Pluma, cuyo nombre real es Hassan Emilio Kabande Laija, ha
						ganado popularidad con su estilo musical conocido como corridos
						tumbados, en los que explora temas como el lujo, el poder y las
						referencias a la vida de los narcotraficantes. Con éxitos que
						encabezan las listas, Peso Pluma ha cautivado a jóvenes de diversas
						clases sociales y, en cierto modo, representa la evolución de los
						narcocorridos hacia una expresión cultural masiva. Su posible
						relación con Diana Esparragoza –descendiente de uno de los
						narcotraficantes más poderosos de México– ha suscitado preguntas
						sobre la relación entre la fama y el crimen organizado. Diana
						Esparragoza pertenece a una familia con un historial profundamente
						arraigado en el mundo del narcotráfico. Su abuelo, "El Azul," fue
						una de las figuras claves del Cártel de Sinaloa junto a Joaquín "El
						Chapo" Guzmán y otros líderes. La posible relación entre Diana y
						Peso Pluma es un ejemplo de cómo las nuevas generaciones de familias
						asociadas con el narcotráfico buscan aceptación social y relevancia
						en el ámbito del entretenimiento, usando su influencia para conectar
						con figuras populares en las redes y en la música.
					</p>
					<img
						className={styles.imagenDos}
						src="https://tecolotito.elsiglodedurango.com.mx/i/2024/10/1285825.jpeg"
						alt=""
					/>
					<h5>
						Apología del Delito y Narcocultura en la Música: La Búsqueda de
						Aceptación Social
					</h5>
					<p>
						La música de Peso Pluma y de otros artistas de corridos tumbados ha
						sido señalada en varias ocasiones por normalizar y glorificar el
						estilo de vida de los narcotraficantes. Este fenómeno forma parte de
						una tendencia creciente que fusiona entretenimiento y narcocultura,
						en la que jóvenes de distintas regiones ven en estos personajes una
						especie de aspiración o reflejo de éxito. A través de canciones y
						letras que exaltan el lujo y el poder de figuras criminales, la
						narcocultura sigue encontrando un lugar en la industria musical,
						atrayendo a nuevas generaciones que ven en estos temas algo más que
						un estilo de vida prohibido. Esta forma de apología del delito a
						través de la música permite que el narcotráfico y sus representantes
						se filtren en la sociedad y ganen una aceptación social indirecta.
						Las relaciones entre celebridades, como la de Peso Pluma y Diana
						Esparragoza, también juegan un papel clave en este proceso, ya que
						acercan a los íconos de la narcocultura al público, generando un
						debate constante sobre la responsabilidad del entretenimiento en la
						normalización de la delincuencia organizada.
					</p>

					<h5>Reflexiones Finales</h5>
					<p>
						La relación entre Peso Pluma y Diana Esparragoza es más que una
						simple historia de romance; es un reflejo de cómo la narcocultura se
						convierte en un vehículo de influencia y aceptación social en la
						actualidad. Con el auge de la música de corridos tumbados y el
						creciente papel de las redes sociales, este fenómeno sigue en
						expansión. La aceptación social de figuras ligadas al narcotráfico,
						a través de la música y la popularidad de sus descendientes, nos
						lleva a cuestionar el impacto de estas historias en la juventud y la
						responsabilidad de los creadores de contenido en la construcción de
						narrativas sociales.
					</p>
				</div>
			</div>
		</>
	);
};

export default NoticiaPage;
