import styles from "./noticiero.module.css";
import Noiticias from "../../Components/Noticias/Noiticias";

const NoticieroPage = () => {
	return (
		<>
			<section className={styles.noticieroPage}>
				<h2>Historia y Perspectiva: Noticias Relevantes</h2>
				<p>
					Aquí encontrarás noticias y análisis relacionados con el narcotráfico en México.
					Nos enfocamos en documentar eventos históricos y actuales, reflexionar
					sobre sus repercusiones sociales y honrar la memoria de las víctimas
					afectadas por este fenómeno. Nuestro objetivo es fomentar una
					comprensión profunda de las causas y consecuencias del narcotráfico,
					sensibilizando a la sociedad sobre la necesidad de prevenir su
					repetición. A través de un enfoque analítico, promovemos soluciones
					integrales que incluyan perspectivas multidisciplinarias,
					fortaleciendo políticas públicas orientadas al bienestar social y a la
					construcción de un futuro más seguro y justo.
				</p>
				<Noiticias />
			</section>
		</>
	);
};

export default NoticieroPage;
