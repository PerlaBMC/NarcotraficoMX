import styles from "./mision.module.css";

const Mision_Vision = () => {
	return (
		<>
			<div className={styles.misionContainer}>
				<div className={styles.seccionMision}>
					<h5>Misión</h5>
					<p>
						Ofrecer una fuente confiable de información e investigación sobre el
						narcotráfico en México, destacando su impacto en la sociedad y
						apoyando el desarrollo de soluciones integrales mediante datos
						relevantes y accesibles.
					</p>
				</div>
				<div className={styles.seccionVision}>
					<h5>Visión</h5>
					<p>
						Convertirnos en el recurso líder en México para el análisis del
						narcotráfico, promoviendo la prevención, la educación y el diseño de
						políticas públicas multidisciplinarias que atiendan esta
						problemática.
					</p>
				</div>
			</div>
		</>
	);
};

export default Mision_Vision;
